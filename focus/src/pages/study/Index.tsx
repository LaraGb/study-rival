import React from 'react';
import Layout from './components/layout/Index';
import UserDataField from './components/user-data-field/Index';
import FeatureField from './components/feature-field/Index';

export default function Index() {
  return (
    <Layout>
      <UserDataField/>
      <FeatureField/>
    </Layout>
  )
}
