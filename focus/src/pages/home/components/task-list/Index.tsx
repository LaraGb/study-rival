import React from 'react';
import Column from 'shared/components/global/column/Column';
import Span from 'shared/components/global/span/Span';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import styled from 'styled-components';
import Task from './task/Index';

export default function Index() {
  return (
    <Container>
      <Column gap='4rem'>
        <Header>
          <Span fontSize='1.6rem' fontWeight='bold'>Work Hard</Span>
          <StylizedButton>Add Task</StylizedButton>
        </Header>
        <TableField>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Task Name</th>
                <th>Duration</th>
                <th>Duration Goal</th>
              </tr>
            </thead>
            <tbody>
              {
                 Array(6).fill(0).map((_,key)=>( 
                  <Task key={key}/>
                ))
              }
            </tbody>
          </table>
        </TableField>
      </Column>
    </Container>
  )
}

const Container = styled.div`
 background-color: white;
 padding: 2rem 2rem 6rem 2rem;
 color:${({theme})=>theme.color.text.main.dark};
`;

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const TableField = styled.table`
 border: ${({theme})=> theme.border.style};
 border-radius: 12px;

  &>table{
    width: 100%;
    border-collapse: collapse;
  &>thead tr th{
    padding: 2.8rem 0rem;
    font-size: 1.4rem;
    border-bottom: ${({theme})=> theme.border.style};
    text-align: center;
  }

  &>tbody tr td{
    padding: 2.2rem 0rem;
    border-top: ${({theme})=> theme.border.style};
    text-align: center;
  }
  }
`;
