import React from "react";
import Container from "../../../../shared/components/global/container/Container";
import Column from "../../../../shared/components/global/column/Column";
import Title from "../../../../shared/components/global/title/Title";
import Paragraph from "../../../../shared/components/global/paragraph/Paragraph";
import StylizedButton from "../../../../shared/components/global/stylized-button/StylizedButton";
import Card from "./CardsField";
import MaskContent from "../../../../shared/components/global/motion/MaskContent";
import MaskY from "../../../../shared/components/global/motion/MaskY";

export default function Index() {
  return (
    <Container>
      <Column alignItems="center" gap="6rem">
        <Card />
        <MaskY>
          <Column maxWidth="580px" gap="2rem" alignItems="center">
            <MaskContent><Title>Breaking the Barriers to Banking</Title></MaskContent>
            <Paragraph textAlign="center">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
             reiciendis nemo quidem fugit debitis fuga porro? Alias omnis dicta
             modi laborum, explicabo tenetur consectetur ab, ipsum, provident
             molestiae distinctio impedit?
            </Paragraph>
            <Paragraph textAlign="center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi
              eius perferendis temporibus doloribus sapiente aut, exercitationem
              dolor velit! Quia!
            </Paragraph>
            <StylizedButton>Contact Us</StylizedButton>
          </Column>
        </MaskY>
      </Column>
    </Container>
  );
}
