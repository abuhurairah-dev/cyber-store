import React from "react";
import styled from "styled-components";

const HeroWrap = styled.section`
  background: linear-gradient(180deg, #121016 0%, #1b171b 100%);
  color: #fff;
  padding: 56px 48px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  height: 500px;

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    padding: 60px 24px;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
  max-width: 560px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Sub = styled.div`
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 14px;
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 1.02;
  margin: 0 0 18px 0;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 46px;
  }
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Desc = styled.p`
  color: #c7c4c9;
  margin-bottom: 22px;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 40px;
  }
`;

const PhoneMock = styled.img`
  width: 600px;
  height: 400px;
  max-width: 100%;
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-12px) scale(1.07);
  }

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 480px) {
    width: 260px;
  }
`;

export default function Hero() {
  return (
    <HeroWrap>
      <Left>
        <Sub>Pro.Beyond.</Sub>
        <Title>
          iPhone 14 <strong style={{ fontWeight: 600 }}>Pro</strong>
        </Title>
        <Desc>Created to change everything for the better. For everyone.</Desc>
        <Button>Shop Now</Button>
      </Left>
      <Right>
        <PhoneMock src="/iphone1.jpg" alt="iPhone 14 Pro" />
      </Right>
    </HeroWrap>
  );
}
