import PageLayout from 'shared/components/layout/PageLayout';
import TabsField from 'shared/components/global/tabs-field/TabsField';
import TaskList from './components/task-list/Index';
import pageIcons from 'shared/utils/pageIcons';
import Challenge from './components/challenge-field/Index'
import Border from 'shared/components/global/border/Border';
import {Box} from '@chakra-ui/react';

const tabs = [
  {
    id:0,
    label:'TaskList',
    Icon:pageIcons.Task,
    Component:TaskList
  },
  {
    id:0,
    label:'Challenge',
    Icon: pageIcons.challenge,
    Component:Challenge
  },
  {
    id:0,
    label:'TaskList',
    Icon: pageIcons.goal,
    Component:TaskList
  }
]

export default function Index() {
  return (
    <PageLayout>
      <Border padding='4rem' borderWidth='3px'>
        <Box minH={'55rem'}>
          <TabsField tabs={tabs}/>
        </Box>
      </Border>
    </PageLayout>
  )
}


