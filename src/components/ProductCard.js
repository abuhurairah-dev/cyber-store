import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  position: relative;
  box-shadow: 0 6px 18px rgba(12, 15, 20, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(12, 15, 20, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Heart = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  color: #9ca3af;
  &:hover {
    color: #ef4444;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.div`
  font-size: 13px;
  text-align: center;
  min-height: 38px;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 12px;
    min-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Btn = styled.button`
  background: #000;
  color: #fff;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #111;
  }

  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export default function ProductCard({ product }) {
  return (
    <Card>
      <Heart>
        <FiHeart />
      </Heart>
      <Img src={product.image} alt={product.title} />
      <Title>
        {product.title.length > 70
          ? product.title.slice(0, 70) + "..."
          : product.title}
      </Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Btn>Buy Now</Btn>
    </Card>
  );
}
