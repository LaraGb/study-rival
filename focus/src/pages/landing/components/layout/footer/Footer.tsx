import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../../shared/components/global/logo/Logo';
import Paragraph from '../../../../../shared/components/global/paragraph/Paragraph';
import Row from '../../../../../shared/components/global/row/Row';
import { socialMediaList } from '../../../../../config/social_media/socialMediaConfig';
import WideWrapping from '../../../../../shared/components/global/wide-wrapping/WideWrapping';

export default function Footer() {
  return (
    <Container>
      <WideWrapping>
        <FlexList>
          <Logo/>
          <Paragraph >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusamus!
          </Paragraph>
          <Row gap='1.4rem'>
            {
             socialMediaList.map(media => <Link href={media.link} target='_blank'><media.icon/></Link>)
            }
          </Row>
        </FlexList>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  padding: 6rem;
`;

const FlexList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 2.6rem;
`;