import { Box, VStack, List, ListItem } from '@chakra-ui/react';
import { IArticleCategoryBasic } from '@src/models/article-category.interface';
import Link from 'next/link';
import { TitleHeading } from '@src/components/title-heading';

export interface IArticleCategoryList {
  categories: IArticleCategoryBasic[];
}

export const ArticleCategoryList = ({ categories }: IArticleCategoryList) => {
  return (
    <Box>
      <VStack>
        <TitleHeading title={'Categories'} />

        <List spacing={3}>
          {categories.map((category) => (
            <ListItem key={category.id}>
              <Link href="#" passHref>
                <Box as="a" fontWeight="bold" letterSpacing="tight" textTransform="uppercase">
                  {category.title}
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};
