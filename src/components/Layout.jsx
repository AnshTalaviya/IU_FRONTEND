import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatSupport from './ChatSupport';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow bg-gray-900 pt-16">{children}</main>
      <Footer/>
      <ChatSupport/>
    </div>
  );
};

export default Layout;
