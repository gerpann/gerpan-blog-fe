import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';

import { Meta } from '@src/layouts/meta';
import { Main as MainTemplate } from '@src/templates/main';
import MainRightSideBar from '@src/components/sidebar/main-right-sidebar';
import ArticleCard from '@src/components/article/article-card';
import { CustomRow, CustomColumn } from '@src/components/custom-grid';
import ArticleTagsRandom from '@src/components/article-tags/article-tags-random';
import TitleHeading from '@src/components/title-heading';
import Paginator from '@src/components/paginator';
import ArticleNoData from '@src/components/article/article-no-data';
import { IArticleBasic, IPaginatiedArticles } from '@src/models/article.model';
import { IArticleTagBasic } from '@src/models/article-tag.model';
import { IArticleCategoryBasic } from '@src/models/article-category.model';
import { API_ENDPOINT, PUBLIC_API_ENDPOINT } from '@src/configs';
import { IUserBasic } from '@src/models/user.model';

export default function HomePage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const { articleTags, articleCategories } = props;
  const [filter, setFilter] = useState<IFilter>(router.query as IFilter);
  const [paginatedArticles, setPaginatedArticles] = useState<IPaginatiedArticles>(
    props.paginatedArticles
  );

  useEffect(() => {
    setFilter(router.query);
  }, [router.query]);

  useEffect(() => {
    axios
      .get(`${PUBLIC_API_ENDPOINT}/articles`, {
        params: filter
      })
      .then((res) => {
        console.log(res);
        setPaginatedArticles(res.data);
      });

    axios.get('https://www.boredapi.com/api/activity').then((res) => console.log(res.data));
  }, [filter]);

  return (
    <MainTemplate meta={<Meta title="Home | Gerpan Blog" description="Gerpan Blog" />}>
      <Heading as="h1" hidden={true}>
        {'Article'}
      </Heading>
      <CustomRow>
        <CustomColumn base={12} md={8}>
          <TitleHeading title={'Articles'} />
          <Box mb="5" />

          <ArticleTagsRandom tags={articleTags} setFilter={setFilter} />
          <Box mb="5" />

          {paginatedArticles.items?.length > 0 ? (
            <>
              {paginatedArticles.items.map((__article: IArticleBasic) => (
                <ArticleCard key={__article.id} article={__article} />
              ))}
              <Paginator
                page={paginatedArticles.meta.currentPage}
                limit={paginatedArticles.meta.itemsPerPage}
                total={paginatedArticles.meta.totalItems}
                totalPages={paginatedArticles.meta.totalPages}
              />
            </>
          ) : (
            <ArticleNoData />
          )}
        </CustomColumn>
        <CustomColumn base={12} md={4} position="relative">
          <MainRightSideBar user={props.adminProfile} articleCategories={articleCategories} />
        </CustomColumn>
      </CustomRow>
    </MainTemplate>
  );
}

interface IFilter {
  page?: number | string;
  limit?: number | string;
  category?: number | string;
  tags?: number | string;
  search?: string;
}

interface IHomePageProps {
  adminProfile: IUserBasic;
  paginatedArticles: IPaginatiedArticles;
  articleTags: IArticleTagBasic[];
  articleCategories: IArticleCategoryBasic[];
}

export const getServerSideProps: GetServerSideProps<IHomePageProps> = async (context) => {
  const { query } = context;

  const adminProfile: IUserBasic = (await axios.get(`${API_ENDPOINT}/users/admin`)).data;
  const paginatedArticles: IPaginatiedArticles = (
    await axios.get(`${API_ENDPOINT}/articles`, { params: query })
  ).data;
  const articleTags: IArticleTagBasic[] = (await axios.get(`${API_ENDPOINT}/articles/tags`)).data;
  const articleCategories: IArticleCategoryBasic[] = (
    await axios.get(`${API_ENDPOINT}/articles/categories`)
  ).data;

  return {
    props: {
      adminProfile,
      paginatedArticles,
      articleCategories,
      articleTags
    }
  };
};
