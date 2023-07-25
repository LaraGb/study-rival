"use client"
import React from 'react'
import Title from '../title/Title'
import { Checkbox } from '@chakra-ui/react'
import Paragraph from '../paragraph/Paragraph'

export default function TaskList() {
  return (
    <div>
      <div>
         <div>
            <Title>Lista de Tarefas</Title>
            <p>Seus objetivos para hoje</p>
         </div>
      </div>
      <div className='flex flex-col'>
        <Checkbox  defaultChecked padding={4}>Checkbox</Checkbox>
        <Checkbox  defaultChecked padding={4}>Checkbox</Checkbox>
        <Checkbox  defaultChecked padding={4}>Checkbox</Checkbox>
        <Checkbox  defaultChecked padding={4}>Checkbox</Checkbox>
        
      </div>
    </div>
  )
}
