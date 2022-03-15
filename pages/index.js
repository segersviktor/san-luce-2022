import React from 'react';

import MasterLayout from '../components/master-layout';

const Home = ({params}) => {

    return (
        <MasterLayout>
            <div className="main-layout__content">
                <h1>Index page</h1>
            </div>
        </MasterLayout>
    );
};

export default Home;
