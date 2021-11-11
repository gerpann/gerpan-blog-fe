import { Box, VStack } from '@chakra-ui/react';

import { IUserBasic } from '@src/models/user.model';
import ArticleCategoryList from './article-category-list';
import AboutMe from './about-me';
import { __articleCategoriesMock } from '@src/__mocks__/article-categories.mock';
import { IArticleCategoryBasic } from '@src/models/article-category.model';

export interface IMainLeftSidebarProps {
  user: IUserBasic;
  articleCategories: IArticleCategoryBasic[];
}

export default function MainRightSideBar({ user, articleCategories }: IMainLeftSidebarProps) {
  return (
    <VStack>
      <AboutMe user={user} />

      <Box h="5" />

      <ArticleCategoryList categories={articleCategories} />
    </VStack>
  );
}
