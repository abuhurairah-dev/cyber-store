import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrap = styled.section`
  padding: 20px 48px;
  background: transparent;

  @media (max-width: 1024px) {
    padding: 20px 32px;
  }

  @media (max-width: 768px) {
    padding: 18px 20px;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
  }
`;

const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 22px;
  font-weight: 600;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(12, 15, 20, 0.04);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(12, 15, 20, 0.08);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`;

const ItemTitle = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: #111827;
  min-height: 36px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default function Discounts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItems(res.data.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Wrap>
      <Title>Discounts up to -50%</Title>
      <Row>
        {items.map((it) => (
          <Card key={it.id}>
            <Img src={it.image} alt={it.title} />
            <ItemTitle>
              {it.title.length > 50 ? it.title.slice(0, 50) + "..." : it.title}
            </ItemTitle>
            <Price>${it.price.toFixed(2)}</Price>
          </Card>
        ))}
      </Row>
    </Wrap>
  );
}
