import React from 'react';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';
import { NFTProvider } from '../context/NFTContext';

// if (typeof window === 'undefined') {
//   require('dotenv').config();
// }

// const projectId = process.env.INFURA_PROJECT_ID;
// const projectSecret = process.env.INFURA_PROJECT_SECRET;

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <NFTProvider>
          <Component {...pageProps} />
        </NFTProvider>
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/8a40a6fca5.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;

