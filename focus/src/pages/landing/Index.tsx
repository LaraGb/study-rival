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
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,133.3C120,107,240,53,360,58.7C480,64,600,128,720,144C840,160,960,128,1080,128C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div style={{backgroundColor:'#0099ff', marginTop:'-20px'}}>
             <About/>
             <Feature/>  
            </div>
      <CallToAction/>
      <Testimonials/>
    </Layout>
  )
}
