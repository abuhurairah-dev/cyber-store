import React from "react";
import styled from "styled-components";

const HeroWrap = styled.section`
  background: linear-gradient(180deg, #121016 0%, #1b171b 100%);
  color: #fff;
  padding: 56px 48px;
  display:flex;
  gap:40px;
  align-items:center;
  height: 500px;
`;

const Left = styled.div` flex:1; max-width:560px; `;
const Sub = styled.div` color:#9ca3af; font-size:14px; margin-bottom:14px;`;
const Title = styled.h1`
  font-size:60px;
  line-height:1.02;
  margin:0 0 18px 0;
  font-weight:200;
`;
const Desc = styled.p` color:#c7c4c9; margin-bottom:22px; max-width:500px; `;
const Button = styled.button`
  background:transparent;
  color:#fff;
  border:1px solid rgba(255,255,255,0.18);
  padding:10px 18px;
  border-radius:6px;
  cursor:pointer;
`;

const Right = styled.div` flex:1; display:flex; justify-content:flex-end; align-items:center; `;
const PhoneMock = styled.img`
  width:360px;
  max-width:100%;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  border-radius:18px;
`;

export default function Hero(){
  return (
    <HeroWrap>
      <Left>
        <Sub>Pro.Beyond.</Sub>
        <Title>iPhone 14 <strong style={{fontWeight:600}}>Pro</strong></Title>
        <Desc>Created to change everything for the better. For everyone.</Desc>
        <Button>Shop Now</Button>
      </Left>
      <Right>
        <PhoneMock
          src=""
          alt="iPhone 14 Pro"
        />

      </Right>
    </HeroWrap>
  );
}
