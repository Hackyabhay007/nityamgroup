import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Style/Styles.css'

const Layout = ({ children }) => {
  return (
    <div className=" flex  flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
