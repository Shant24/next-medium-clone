import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import api from '../libs/api';

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface ICommentsSectionProps {
  postId: string;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

const WriteCommentForm = ({ postId, setIsSubmitted }: ICommentsSectionProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    try {
      await api.post('/api/create-comment', values);

      setIsSubmitted(true);
    } catch (error) {
      console.log('error', error);
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mb-10 p-10 flex flex-col">
      <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below!</h4>
      <hr className="py-3 mt-2" />

      <input
        {...register('_id')}
        type="hidden"
        name="_id"
        value={postId}
      />

      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          {...register('name', { required: true })}
          className="mt-1 py-2 px-3 w-full block form-input shadow border rounded outline-none focus:ring ring-yellow-500"
          type="text"
          placeholder="John Appleseed"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input
          {...register('email', { required: true })}
          className="mt-1 py-2 px-3 w-full block form-input shadow border rounded outline-none focus:ring ring-yellow-500"
          type="email"
          placeholder="John Appleseed"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register('comment', { required: true })}
          className="mt-1 py-2 px-3 w-full block form-textarea shadow border rounded outline-none focus:ring ring-yellow-500 resize-none"
          rows={8}
          placeholder="John Appleseed"
        />
      </label>

      <div className="flex flex-col p-5 empty:p-0">
        {errors.name && (
          <span className="text-red-500">- The Name Field is required!</span>
        )}
        {errors.email && (
          <span className="text-red-500">- The Email Field is required!</span>
        )}
        {errors.comment && (
          <span className="text-red-500">- The Comment Field is required!</span>
        )}
      </div>

      <input
        className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer disabled:cursor-not-allowed"
        type="submit"
      />
    </form>
  );
};

export default WriteCommentForm;
