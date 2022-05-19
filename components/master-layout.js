import React from "react";
import NextHead from 'next/head';

import MainNavigation from "./main-navigation";
import MainContent from './main-content';
import MainFooter from "./main-footer";
import Script from 'next/script'

const MasterLayout = ({children, background}) => {

    return (
        <>
            <NextHead>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>San Luce Festival</title>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:title" content="San Luce Festival 2022"/>
                <meta property="og:description" content="San Luce 2022 vindt plaat van 12 tot 13 augustus 2022. San Luce is een zomers festival vanuit de lichtfeesten. Elk jaar opnieuw zorgen wij voor 2 avonden gevuld met de beste artiesten, cocktails, pintjes,..."/>
                <meta property="og:image" content="/images/san-luce-podium.jpeg"/>
                <meta property="og:site_name" content="San Luce Festival 2022"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image:alt" content="San Luce Festival 2022"/>
                <meta name="description" content="San Luce 2022 vindt plaat van 12 tot 13 augustus 2022. San Luce is een zomers festival vanuit de lichtfeesten. Elk jaar opnieuw zorgen wij voor 2 avonden gevuld met de beste artiesten, cocktails, pintjes,..."/>
                <meta name="keywords" content="San Luce, Festival, Lichtfeesten, Reet, Rumst, Feest"/>
            </NextHead>
            <div className='main-layout-wrapper'>
                <div className="main-layout">
                    <MainNavigation/>
                    <MainContent>
                        {children}
                    </MainContent>
                    <MainFooter/>
                </div>
            </div>
        </>
    );
};

export default MasterLayout;
