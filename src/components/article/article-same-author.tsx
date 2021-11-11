import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import {
  Box,
  Text,
  List,
  ListItem,
  UnorderedList,
  useColorMode,
  VStack,
  HStack,
  Button,
  Divider
} from '@chakra-ui/react';
import { FaCalendarAlt as CalendarIcon, FaBookmark as CategoryIcon } from 'react-icons/fa';

import TitleHeading from '@src/components/title-heading';
import { CommonUtil } from '@src/utils/common.util';
import { __articlesMock } from '@src/__mocks__/articles.mock';
import { IArticleBasic } from '@src/models/article.model';

export interface IArticleTableContentProps {
  content: string;
}

export interface IHeadingTableContent {
  id: string;
  title: string;
  children?: IHeadingTableContent[];
}

export interface IArticlesSameAuthorProps {
  articles: IArticleBasic[];
}

export default function ArticlesSameAuthor({ articles }: IArticlesSameAuthorProps) {
  const { colorMode } = useColorMode();

  return (
    <Box mt="8">
      <TitleHeading title={'Same author'} />

      <VStack>
        {articles.map((__article) => (
          <Box
            key={__article.id}
            w="100%"
            p="3"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            rounded="xl"
          >
            <NextLink href={__article.slug || '/404'} passHref>
              <Text as={'a'} _hover={{ color: 'primary.500' }}>
                {__article.title}
              </Text>
            </NextLink>

            <Box h="1" />

            <Box h="1" />

            <HStack flex="space-between">
              <Button colorScheme="green" variant="outline" size="xs" leftIcon={<CategoryIcon />}>
                {__article.category.title}
              </Button>
              <HStack>
                {__article.tags.map((__tag) => (
                  <Button key={__tag.id} variant="outline" colorScheme="blue" size="xs">
                    {__tag.title}
                  </Button>
                ))}
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
