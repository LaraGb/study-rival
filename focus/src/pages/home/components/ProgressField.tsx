import React from 'react';
import Column from '../../../shared/components/global/column/Column';
import Row from '../../../shared/components/global/row/Row';
import SubTitle from '../../../shared/components/global/subtitle/SubTitle';
import Paragraph from '../../../shared/components/global/paragraph/Paragraph';
import Timer from '../../../shared/components/global/timer/Timer';
import pageTheme from '../../../styles/pageTheme';
import NeonBtn from '../../../shared/components/global/neon-btn/NeonBtn';

export default function ProgressField() {
  return (
      <Column gap='4rem'>
         <Timer/>
      </Column>
  )
}
