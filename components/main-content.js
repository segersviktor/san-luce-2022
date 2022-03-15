import React from 'react';

const MainContent = ({ children }) => {
    return (
        <main id="main" className="main-layout__content">
            { children }
        </main>
    );
};

export default MainContent;
