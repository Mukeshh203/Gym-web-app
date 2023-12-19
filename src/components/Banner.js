import React from "react";
import styled from "styled-components";
import bg from "../assets/img_1.jpg";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";
import Header from "./Header";


export default function Banner() {
  return (
    <Main>
      {}
      <Header />

      <Container>
        <RightBox>
          <WithBarTitle title="WITH CHRIS BUMSTEAD" />
          <H1>Build Perfect body shape for good and healthy life.</H1>
          <Button animation="fadeInLeft">Know Your Program</Button>
        </RightBox>
        <LeftBox>
          {}
        </LeftBox>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const RightBox = styled.div`
  width: 50%;

  padding: 0px 100px;
`;

