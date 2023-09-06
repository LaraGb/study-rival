import React from 'react';
import {Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel} from '@chakra-ui/react';




export default function TabsField({tabs}:{tabs:unknown}) {
  return (
    <Tabs position="relative" variant="unstyled">

    <TabList gap={8}>
      {
        tabs.map(tab => 
          <Tab  fontSize={'1.6rem'} fontWeight={500} gap={2}  _selected={{ color: 'details.primary.light'}}>
           <tab.Icon fontSize='1.1em'/>
           <span>{tab.label}</span>
          </Tab>
        )
      }
    </TabList>
    <TabIndicator
      mt="14px"
      height="3px"
      bg="details.primary.light"
      borderRadius="1px"
    />
    <TabPanels marginTop={'4rem'}>
      {
        tabs.map(tab => <TabPanel>{<tab.Component/>}</TabPanel>)
      }
    </TabPanels>
  </Tabs>
  )
}
