import React from "react";
import styled from "styled-components";

const Banner = styled.section`
  margin-top: 18px;
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80') 
              no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 16px;
  border-radius: 12px;
  min-height: 500px;
`;

const Title = styled.h2`
  font-size: 50px;
  margin: 0 0 10px 0;
  font-weight: 400;
`;

const Sub = styled.p`
  color: #c7c4c9;
  margin: 0 0 18px 0;
`;

const Button = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function SaleBanner() {
  return (
    <Banner>
      <Title>Big Summer <strong>Sale</strong></Title>
      <Sub>Get exclusive offers on new arrivals. Limited time only.</Sub>
      <Button>Shop Now</Button>
    </Banner>
  );
}
