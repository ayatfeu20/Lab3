
import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from '@/components/Footer'





const Layout = ({ children }) => {
  
  const metadata = {
    title: 'AMFitApp',
    description: 'Created by Ayat Mannaa',
    icons: { apple: '/icon.png' },
    themeColor: '#ffffff'
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        
        <meta name="theme-color" content={metadata.themeColor} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
