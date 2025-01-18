import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title = 'ConnecXit - Event Planning Platform' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
