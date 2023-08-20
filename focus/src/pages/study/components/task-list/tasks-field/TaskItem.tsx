import React from 'react';
import styled from 'styled-components';
import Row from 'shared/components/global/row/Row';
import Column from 'shared/components/global/column/Column';
import Span from 'shared/components/global/span/Span';
import pageIcons from 'shared/utils/pageIcons';

export default function TaskItem() {
  return (
    <Container>
      <Row justifyContent='space-between' height='100%'>
        <MarkColor>
           <Row alignItems='start' height='100%'>
             <CircularIconBtn>
              <pageIcons.Check/>
             </CircularIconBtn>
             <Column gap='4px' padding='1.4rem 0px'>
               <Span fontSize='1.6rem'>Titulo Aqui</Span>
               <Span fontSize='1.4rem'>
                 fdfdsfsdfs
               </Span>
             </Column>
           </Row>
        </MarkColor>
        <div style={{width:'15%'}}>
          <CircularIconBtn color='gray'>
           <pageIcons.Play fontSize='1.6rem'/>
          </CircularIconBtn>
        </div>
      </Row>
    </Container>
  )
}

const Container = styled.div`
 height: 90px;
 border-radius: 6px;
 overflow: hidden;
 background-color: #ffffffc5;
`;

const MarkColor = styled.div`
 flex: 1;
 background-color: #80808092;
`;

const CircularIconBtn = styled.button<{color?:string}>`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: ${({color})=> color || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: none;
  border-radius: 50%;
  background-color: rgba(107, 106, 104, 0.25);
  cursor: pointer;
`;