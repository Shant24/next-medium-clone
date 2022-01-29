import PortableText from 'react-portable-text';

import { SANITY_CONFIGS } from '../utils/constants';

const serializers = {
  h1: (props: any) => (
    <h1 className="text-2xl font-bold my-5" {...props} />
  ),
  h2: (props: any) => (
    <h1 className="text-xl font-bold my-5" {...props} />
  ),
  li: ({ children }: any) => (
    <li className="ml-4 list-disc">
      {children}
    </li>
  ),
  link: ({ href, children }: any) => (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  ),
};

interface IPortableBodyProps {
  body: object[];
}

const PortableBody = ({ body }: IPortableBodyProps) => (
  <PortableText
    className=""
    dataset={SANITY_CONFIGS.dataset}
    projectId={SANITY_CONFIGS.projectId}
    content={body}
    serializers={serializers}
  />
);

export default PortableBody;
