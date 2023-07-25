import React from 'react';
import SubTitle from '../../../../shared/components/global/subtitle/SubTitle';
import Paragraph from '../../../../shared/components/global/paragraph/Paragraph';
import styled from 'styled-components';
import Column from '../../../../shared/components/global/column/Column';
import pageIcons from '../../../../shared/utils/pageIcons';
import InputStylized from '../../../../shared/components/global/input-stylized/InputStylized';
import Row from '../../../../shared/components/global/row/Row';
import StylizedButton from '../../../../shared/components/global/stylized-button/StylizedButton';



export default function TaskListForm() {
  return (
      <Column gap='3.6rem'>
      <Column>
         <SubTitle>Lista de Tarefas</SubTitle>
         <Paragraph>Seus objetivos para essa </Paragraph>
      </Column>
      <TaskContainer>
        <Column gap='20px'>
         <Task>
          <CheckBox>
             <pageIcons.check/>
          </CheckBox>
          <span>Escrever e-mail importante.</span>
         </Task>
         <Task>
          <CheckBox></CheckBox>
          <span>Escrever e-mail importante.</span>
         </Task>
         <Task>
          <CheckBox></CheckBox>
          <span>Escrever e-mail importante.fjksdfiodjfoijdfidsj</span>
         </Task>
      </Column>
      </TaskContainer>
      <Row>
        <InputStylized/>
        <StylizedButton isBgHighlighted={true}>
           Enviar Task
        </StylizedButton>
      </Row>
    </Column>
  )
}


const TaskContainer = styled.div`
  height:22.8rem;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;


  &>*:not(:first-child){
    margin-left: 14px;
  }

  
`;

const CheckBox = styled.button<{isChecked?:boolean}>`
 width: 22px;
 height: 22px;
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 outline: none;
 font-size: 2.2rem;
 color: ${({theme})=>theme.color.text.main || 'white'};
 background-color: transparent;
 box-shadow: 2px 2px 5px #080808, -2px -2px 5px #4a4949;
 box-shadow: inset 5px 5px 4px #1d1d1d,
            inset -5px -5px 4px #2f2f2f;
`;



