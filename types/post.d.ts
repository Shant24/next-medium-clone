export interface IPost {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
    image: IImage;
  };
  description: string;
  mainImage: IImage;
  comments: IComment[];
  slug: {
    current: string;
    _type: string;
  };
  body: object[];
  _createdAt: string;
}

export interface IImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

export interface IComment {
  _id: string;
  _ref: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  post: {
    _ref: string;
    _type: string;
  };
  name: string;
  email: string;
  comment: string;
  approved: boolean;
}
