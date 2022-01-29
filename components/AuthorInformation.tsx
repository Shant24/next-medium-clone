import { IPost } from '../types/post';
import { urlFor } from '../sanity';

const AuthorInformation = ({ author, _createdAt }: Pick<IPost, 'author' | '_createdAt'>) => (
  <div className="flex items-center space-x-2">
    <img className="w-10 h-10 rounded-full" src={urlFor(author.image).url()!} alt={author.name} />
    <p className="font-extralight text-sm">
      Blog post by
      {' '}
      <span className="text-green-600">{author.name}</span>
      {' '}
      - Published at
      {''}
      {new Date(_createdAt).toLocaleString('ru-RU')}
    </p>
  </div>
);

export default AuthorInformation;
