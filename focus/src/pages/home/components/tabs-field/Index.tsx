import React, { useState } from 'react';
import styled from 'styled-components';
import TaskList from '../task-list/Index';
import Row from 'shared/components/global/row/Row';
import Column from 'shared/components/global/column/Column';
import pageIcons from 'shared/utils/pageIcons';

const tabs = [
  {
    id:0,
    label:'Task List',
    Icon: pageIcons.Task,
    Component:<TaskList/>
  },
  {
    id:1,
    label:'Competition',
    Icon: pageIcons.challenge,
    Component:<TaskList/>
  },
  {
    id:0,
    label:'Focused Days',
    Icon: pageIcons.goal,
    Component:<TaskList/>
  }
];

export default function Index() {
  const [currentIndex,setCurrentIndex] = useState(0);

  return (
    <Column gap='4rem'>
      <Header>
        <Row gap='2rem' alignItems='center'>
          {
            tabs.map((item,index) => (
              <TabItem 
                 key={item.id}
                 onClick={()=>setCurrentIndex(index)}
                 isActive={currentIndex === index}>
                <Row gap='1rem' alignItems='center'>
                  {<item.Icon fontSize='2.2rem'/>} 
                  <div>{item.label}</div> 
                </Row>
              </TabItem>)
            )
          }
        </Row>
      </Header>
       {
          tabs[currentIndex].Component
       }
    </Column>
  )
}

const TabItem = styled.button<{isActive?:boolean}>`
  padding-bottom: 2.6rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  color:${({theme, isActive}) => (
    isActive?theme.color.details.primary.dark
    :'currentColor'
  )};
  font-size: 1.4rem;
  font-weight:600;
  background-color:transparent;
  border: none;
  border-bottom: 3px solid transparent;
  border-color:${({theme, isActive}) => (
    isActive?theme.color.details.primary.dark
    :'transparent'
  )};
  cursor: pointer;
`;

const Header = styled.div`
 border-bottom: ${({theme})=> theme.border.style};

`;
