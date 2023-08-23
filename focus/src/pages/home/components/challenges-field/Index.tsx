import React from 'react'
import Column from 'shared/components/global/column/Column'
import Scroll from 'shared/components/global/scroll-box/ScrollBox';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton'
import Row from 'shared/components/global/row/Row';
import CircularImage from 'shared/components/global/circular-image/CircularImage';
import Span from 'shared/components/global/span/Span';
import TabField from 'shared/components/global/tab-field/TabField';



export default function Index() {
  return (
    <Column alignItems='center' gap='2rem'>
      <Row>
        <StylizedButton>Desafiantes</StylizedButton>
        <StylizedButton>Amigos</StylizedButton>
        <StylizedButton>Pedidos</StylizedButton>
      </Row>
      <div>
        <input/>
      </div>
      <Column alignItems='center' width='80%'>
        <Scroll>
           <Column gap='2rem'>
              <Row alignItems='center' gap='10px' justifyContent='space-between'>
                <Span>1</Span>
                <CircularImage/>
                <div style={{flex:1}}>
                  <Span>NickName</Span>
                </div>
                <Span fontWeight='bold'>Time Total em Min</Span>
              </Row>
              <Row alignItems='center' gap='10px' justifyContent='space-between'>
                <Span>1</Span>
                <CircularImage/>
                <div style={{flex:1}}>
                  <Span>NickNameNickNameNickNameNickName</Span>
                </div>
                <Span fontWeight='bold'>Time Total em Min</Span>
              </Row>
           </Column>
        </Scroll>
      </Column>
     
    </Column>
  )
}

