import { ArticleMetaKey, IArticleBasic } from '@src/models/article.interface';

const __articleMock: IArticleBasic = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  metaTitle: 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit',
  slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eveniet animi totam velit! Sit consequuntur ut praesentium amet dolore laboriosam.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eveniet animi totam velit! Sit consequuntur ut praesentium amet dolore laboriosam.',
  published: true,
  author: {
    id: 1,
    firstName: 'Nhật',
    lastName: 'Bùi',
    avatar: 'https://bit.ly/2WElp9q',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },
  parent: null,
  children: [],
  metas: [
    {
      id: 1,
      key: ArticleMetaKey.BANNER,
      content: 'https://timviec365.com/pictures/images/coder-la-gi-6(1).jpg'
    }
  ],
  category: {
    id: 1,
    level: 2,
    title: 'Category'
  },
  tags: [
    {
      id: 1,
      title: 'html'
    },
    {
      id: 2,
      title: 'css'
    },
    {
      id: 1,
      title: 'js'
    }
  ],
  comments: [
    {
      id: 1,
      content: 'Nice bro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

export const __articlesMock: IArticleBasic[] = new Array<IArticleBasic>(10).fill(__articleMock);
