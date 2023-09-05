import React from 'react';
import styled from 'styled-components';
import PageLayout from 'shared/components/layout/PageLayout';
import TabsField from './components/tabs-field/Index';

export default function Index() {
  return (
    <PageLayout>
       <Container>
          <TabsField/>
       </Container>
    </PageLayout>
  )
}

const Container = styled.div`
  border:${({theme})=> theme.border.style};
  padding: 4rem;
`;
