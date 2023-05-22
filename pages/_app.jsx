import React from 'react';
import Navbar from './../components/navbar';
import './../styles/globals.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    // console.log(`[App] render`);
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header>
                <Navbar />
            </header>
            <Component {...pageProps} />
        </>
    );
};

export default App;
