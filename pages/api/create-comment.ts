import type { NextApiHandler } from 'next';
import sanityClient from '@sanity/client';

import { ErrorStatusCodesEnum, RequestMethodsEnum, SuccessStatusCodesEnum } from '../../types/request';
import { SANITY_CONFIGS } from '../../utils/constants';

const client = sanityClient(SANITY_CONFIGS);

const createComment: NextApiHandler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case RequestMethodsEnum.POST:
      const { _id, name, email, comment } = body;

      try {
        await client.create({
          _type: 'comment',
          post: {
            _type: 'reference',
            _ref: _id,
          },
          name,
          email,
          comment,
        });

        res.status(SuccessStatusCodesEnum.CREATED).json({ message: 'Comment submitted' });
      } catch (error) {
        console.log('error', error);
        res.status(ErrorStatusCodesEnum.INTERNAL_SERVER_ERROR).json({ message: `Couldn't submit comment`, error });
      }

      break;

    default:
      res.status(ErrorStatusCodesEnum.METHOD_NOT_ALLOWED).json({ message: `Method ${method} not allowed` });
  }
};

export default createComment;
