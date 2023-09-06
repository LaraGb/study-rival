import React from 'react';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

type tableT = {
  headerlabels:Array<string>,
  bodyContent:Array<unknown>
}

export default function TableField({headerlabels,bodyContent}:tableT) {
  return (
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        {
          headerlabels.map(item =><Th textAlign={'center'}  color={'text.gray.medium'} padding={10} fontSize={'1.4rem'}>{item}</Th>)
        }
      </Tr>
    </Thead>
    <Tbody>
      {
        bodyContent.map(item => (
          <Tr key={item?.id}>
            {
              item.content?.map(item =><Td textAlign={'center'} color={'text.gray.medium'} fontSize={'1.4rem'} padding={8} fontWeight={500}>{item}</Td>)
            }
          </Tr>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>
  )
}
