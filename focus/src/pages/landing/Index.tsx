import React from 'react';
import Layout from './components/layout/Index';
import About from './components/about/Index';
import Banner from './components/banner/Banner';
import Feature from './components/feature/Index';


export default function Index() {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Feature/>
    </Layout>
  )
}
