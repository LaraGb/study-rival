"use client"
import Image from 'next/image';
import WideWrapping from '@/shared/components/global/wide-wrapping/WideWrapping';
import TimerControlField from '@/shared/components/global/timer-control-field/TimerControlField';
import { Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react';
import TaskList from '@/shared/components/global/task-list/TaskList';

const TabsList = [
  {
    label:"Tarefas",
    Component:<TaskList/>
  }
]

export default function Home() {
  return (
    <main>
      <div className='h-screen flex flex-col'>
        <div>
          header
        </div>
        <div className='h-full flex justify-center items-center'>
          <WideWrapping>
            <div className='flex'>
              <div>
               <TimerControlField/>
              </div>
              <div>
               <Tabs variant={'enclosed'}>
                 <TabList padding={10}>
                    {
                      TabsList.map(tab => <Tab>{tab.label}</Tab>)
                    }
                 </TabList>
                 <TabPanels>
                   {
                     TabsList.map(tab => <TabPanel>{tab.Component}</TabPanel>)
                   }
                 </TabPanels>
               </Tabs>
              </div>
            </div>
         </WideWrapping>
        </div>
      </div>
    </main>
  )
}
