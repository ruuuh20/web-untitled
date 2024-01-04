import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import React from 'react';

const Marquee = () => {
    return (
        <><Layout><Header />
        <Container><h1 className="mb-4 text-2xl font-bold page-title md:text-3xl xl:text-4xl">
            Marquee
          </h1></Container>
            </Layout></>
       
    );
};

export default Marquee;
