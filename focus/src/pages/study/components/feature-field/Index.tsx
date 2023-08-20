import React from "react";
import Container from "shared/components/global/container/Container";
import Span from "shared/components/global/span/Span";
import styled from "styled-components";
import TaskList from "../task-list/Index";
import TimeField from "../timer-field/Index";
import ChallengeField from "../challenges-field/Index";

const cards = [
  {
    id: 0,
    title: "TaskList",
    subTitle: "Adcione suas Tarefas",
    Component: TaskList,
  },
  {
    id: 1,
    title: "Temporizador",
    subTitle: "Inicie o Temporizador e comece estudar",
    Component: TimeField,
  },
  {
    id: 2,
    title: "Desafiantes",
    subTitle: "Incentive e Desafie Seus Amigos",
    Component: ChallengeField,
  },
];

export default function Index() {
  return (
    <Container>
      <CardsList>
        {cards.map((card) => (
          <Card key={card.id}>
            <div className="header">
              <Span fontSize="2rem" fontWeight="bold">
                {card.title} 
              </Span>
            </div>
            <div className="content">
              <div className="sub-field">
                <Span
                 fontWeight="bold"
                 fontSize="1.6rem"
                >
                {card.subTitle}
                </Span>
              </div>
              <card.Component />
            </div>
          </Card>
        ))}
      </CardsList>
    </Container>
  );
}

const CardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    padding: 10px 0px;
  }

  .sub-field{
   padding: 1.4rem 0.8rem;
   margin-bottom: 20px;
   background-color:rgba(26,24,29,.06);

  }

  & > .content {
    flex: 1;
    padding: 0px 10px;
    padding: 1.6rem 1rem;
    background-color: #edecee;
  }
`;
