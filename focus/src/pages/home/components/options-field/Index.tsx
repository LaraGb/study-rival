import React, { useState } from 'react';
import styled from 'styled-components';
import StylizedButton from '../../../../shared/components/global/stylized-button/StylizedButton';
import Row from '../../../../shared/components/global/row/Row';
import TaskListForm from './TaskListForm';
import Column from '../../../../shared/components/global/column/Column';


const tabs = [
  {
    id:0,
    label:'Tarefas',
    Component:<TaskListForm/>
  }, {
    id:1,
    label:'Tarefas',
    Component:<TaskListForm/>
  }
];

export default function Index() {
  const [currentTabId,setCurrentTabId] = useState(tabs[0].id);

  return (
    <Container>
      <Column gap='5.4rem'>
      <Row gap='12px'>
         {
          tabs.map(tab =>
            (<StylizedButton key={tab.id}
               onClick={() => setCurrentTabId(tab.id)}
              >
                {tab.label}
              </StylizedButton>)
          )
         }
      </Row>
      <div>
        {
          tabs.map(tab => tab.id === currentTabId?tab.Component:'')
        }
      </div>
     </Column>
    </Container>
  )
}


const Container = styled.div`
  padding: 6rem;
  box-shadow: ${({theme})=>theme.shadow.neumorphic_shadow};
`;
