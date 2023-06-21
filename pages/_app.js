import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
