import React from "react";
import styled from "styled-components";
import WideWrapping from "../../shared/components/global/wide-wrapping/WideWrapping";
import RowToColumn from "../../shared/components/global/row-to-column/RowToColumn";
import OptionsField from "./components/options-field/Index";
import ProgressField from "./components/ProgressField";
import Logo from "../../shared/components/global/logo/Logo";

export default function Index() {
  return (
    <ColumnContainer>
      <WideWrapping>
    
      </WideWrapping>
      <Main>
         <WideWrapping>
           <RowToColumn>
              <Box>
                <ProgressField/>
              </Box>
              <Box>
                <OptionsField/>
              </Box>
           </RowToColumn>
         </WideWrapping>
      </Main>
    </ColumnContainer>
  );
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
 padding: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
`;
