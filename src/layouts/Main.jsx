import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import TabArea from './TabArea';
import Teams from './Teams';
import Company from './Company';


const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabArea></TabArea>
            <Teams></Teams>
            <Company></Company>
        </div>
    );
};

export default Main;