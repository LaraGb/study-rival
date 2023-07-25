import React from 'react';
import Timer from '../timer/Timer';
import Title from '../title/Title';
import Paragraph from '../paragraph/Paragraph';

export default function TimerControlField() {
  return (
   <div className='flex flex-col space-y-10'>
     <Timer/>
     <div className='flex flex-col space-y-12'>
       <div className=''>
         <Title>Dados da Sessão</Title>
         <Paragraph>
           Acompanha os próximos cíclos
         </Paragraph>
       </div>
       <div>
          <div>
            <div>
              <p>Modo atual</p>
              <p className='text-tertiary_txt text-sm'>
                Cíclo atual do cronômetro
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>modo atual</p>
              <p className='text-tertiary_txt text-sm'>
                 Próximo modo:
              </p>
            </div>
          </div>
       </div>
     </div>
   </div>
  )
}
