import React from 'react';
import Layout from './components/layout/Index';
import About from './components/about/Index';
import Banner from './components/banner/Banner';
import Feature from './components/feature/Index';
import CallToAction from './components/call-to-action/CallToAction';
import Testimonials from './components/testimonials/Index';
import Grow from 'shared/components/motion/grow/Grow';

export default function Index() {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Feature/>
      <CallToAction/>
      <Testimonials/>
    </Layout>
  )
}
