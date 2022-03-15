import React from "react";
import NextHead from 'next/head';

import MainNavigation from "./main-navigation";
import MainContent from './main-content';

const MasterLayout = ({ children, background }) => {

    return (
        <>
            <NextHead>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*<title>{ __('site.header.ttl') }</title>*/}
                {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />*/}
                {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />*/}
                {/*<meta name="theme-color" content="#ffffff" />*/}
            </NextHead>
            <div className='main-layout-wrapper'>
                <div className="main-layout">
                    <MainNavigation />
                    <MainContent>
                        { children }
                    </MainContent>
                    {/*<MainFooter />*/}
                </div>
            </div>
        </>
    );
};

export default MasterLayout;
