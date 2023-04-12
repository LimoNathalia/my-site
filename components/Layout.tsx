import Head from 'next/head';
import React from 'react';

// interface to declare all the prop types
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - NL</title>
        <meta name="description" content="Welcome to my personal page - NL" />
        <meta property="og:image" content="NL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between">
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
