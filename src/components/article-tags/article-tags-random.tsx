import Link from 'next/link';
import { Flex, Tag, Icon, HStack, Text } from '@chakra-ui/react';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { IArticleTagBasic } from '@src/models/article-tag.interface';
import { FaTags as TagsIcon } from 'react-icons/fa';

export interface IArticleTagsRandomProps {
  tags: IArticleTagBasic[];
}

export default function ArticleTagsRandom({ tags }: IArticleTagsRandomProps) {
  const colorSchemes: ThemeTypings['colorSchemes'][] = [
    'blue',
    'cyan',
    'facebook',
    'green',
    'linkedin',
    'messenger',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'telegram',
    'twitter',
    'whatsapp',
    'yellow'
  ];

  const getTagColor = (tagId: number) => {
    tagId--;
    return colorSchemes[tagId % colorSchemes.length];
  };

  return (
    <Flex wrap="wrap" justify="center" align="center">
      <HStack mr="3">
        <Text as="h3" fontWeight="semibold" color="GrayText">
          {'Tags'}
        </Text>
        <Icon as={TagsIcon} w="5" h="5" color="primary.500" />
      </HStack>

      {tags.map((tag) => (
        <Link key={tag.id} href="#" passHref>
          <Tag
            p="2"
            m="0.5"
            rounded="xl"
            variant="solid"
            colorScheme={getTagColor(tag.id)}
            cursor="pointer"
            sx={{ _hover: { shadow: 'xl' } }}
          >
            {tag.title}
          </Tag>
        </Link>
      ))}
    </Flex>
  );
}