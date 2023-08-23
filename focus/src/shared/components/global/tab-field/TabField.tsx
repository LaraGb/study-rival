import React, {useState} from 'react';
import StylizedButton from '../stylized-button/StylizedButton';
import Row from '../row/Row';
import Column from '../column/Column';

type tabFieldT = {
  tabs:Array<{id:string|number,label:string,Component:React.ReactNode}>
}

export default function TabField({tabs}:tabFieldT) {
  const [currentTabIndex,setCurrentTabIndex] = useState(0);

  console.log(tabs)

  return (
    <Column gap='2.6rem'>
       <Row>
        {
        tabs.map((tab,index) => 
          <StylizedButton onClick={()=>setCurrentTabIndex(index)}>
            {tab.label}
          </StylizedButton>)
        }
       </Row>
       <>
         {
          tabs[currentTabIndex].Component
         }
       </>
    </Column>
  )
}


