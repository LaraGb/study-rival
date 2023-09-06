import styled from "styled-components";
import TableField from "shared/components/global/table-field/TableField";
import { Box } from "@chakra-ui/react";
import Border from "shared/components/global/border/Border";
import Row from "shared/components/global/row/Row";
import Span from "shared/components/global/span/Span";
import StylizedButton from "shared/components/global/stylized-button/StylizedButton";
import Column from "shared/components/global/column/Column";

const header = ['status','task Name', 'current timer', 'timer'];
const body = [{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
},
{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
},
{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
}
];

export default function Index({checked}:({checked?:boolean})) {
  return (
    <Box bg={'white'} padding={'0rem 2rem 8rem 2rem'}>
      <Column gap="3rem">
       <Border padding="2.3rem 2rem" borderWidth="0px 0px 3px 0px">
        <Row justifyContent="space-between" alignItems="center">
           <Span>Work Hard</Span>
           <StylizedButton>Lorem, ipsum.</StylizedButton>
        </Row>
      </Border>
      <TableField headerlabels={header} bodyContent={body}/>
      </Column>
    </Box>
  )
}



const CheckBtn = styled.button<{isChecked?:boolean}>`
  width: 3rem;
  height: 3rem;
  text-align: center;
  color: white;
  border: none;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;

`;