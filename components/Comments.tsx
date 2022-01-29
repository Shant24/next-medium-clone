import { IComment } from '../types/post';

interface ICommentsProps {
  comments: IComment[];
}

const Comments = ({ comments }: ICommentsProps) => (
  <div className="max-w-2xl my-10 mx-auto p-10 flex flex-col shadow shadow-yellow-500 space-y-2">
    <h3 className="text-4xl">Comments</h3>
    <hr className="pb-2" />
    {comments.map(({ _id, name, comment }) => (
      <div key={_id}>
        <p>
          <span className="text-yellow-500">{name}</span>: {comment}</p>
      </div>
    ))}
  </div>
);

export default Comments;
