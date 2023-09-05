import React from 'react';
import Column from 'shared/components/global/column/Column';
import Timer from 'shared/components/global/timer/Timer';
import Span from 'shared/components/global/span/Span';
import pageTheme from 'styles/pageTheme';

export default function Index() {
  return (
    <div style={{flexShrink:0}}>
      <Column gap='2rem' alignItems='center'>
         <Column gap='2.4rem' alignItems='center'>
           <Timer/>
           <Column>
               <Span 
                  fontSize={pageTheme.fontSize.text_xl} 
                  fontWeight='bold' 
                  color={pageTheme.color.text.main.dark}
                >
                 Hello Alfred Bryant
               </Span>
               <Span fontWeight='bold'>Lorem ipsum dolor sit.</Span>
           </Column>
         </Column>
      </Column>
    </div>
  )
}
