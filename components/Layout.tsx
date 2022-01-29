import { FC } from 'react';

import cls from 'classnames';
import Head from 'next/head';

import Header from './Header';

interface ILayoutProps {
  title?: string;
  className?: string;
}

const Layout: FC<ILayoutProps> = ({ children, title = '', className = '' }) => (
  <>
    <Head>
      <title>{title && `${title}: `}Medium Blog</title>
    </Head>
    <Header />
    <main className={cls({ [className]: className })}>
      {children}
    </main>
  </>
);

export default Layout;
