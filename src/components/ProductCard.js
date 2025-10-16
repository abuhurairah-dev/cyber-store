import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const Card = styled.div`
  background:#fff;
  border-radius:12px;
  padding:14px;
  position:relative;
  box-shadow: 0 6px 18px rgba(12,15,20,0.06);
  display:flex;
  flex-direction:column;
  gap:12px;
  align-items:center;
`;

const Heart = styled.div`
  position:absolute;
  top:12px;
  right:12px;
  cursor:pointer;
  color:#9ca3af;
  &:hover{ color:#ef4444; }
`;

const Img = styled.img`
  width:150px;
  height:150px;
  object-fit:contain;
`;

const Title = styled.div`
  font-size:13px;
  text-align:center;
  min-height:38px;
  color:#111827;
`;

const Price = styled.div`
  font-weight:700;
  font-size:16px; 
`;

const Btn = styled.button`
  background:#000;
  color:#fff;
  padding:8px 14px;
  border:none;
  border-radius:8px;
  cursor:pointer;
`;

export default function ProductCard({product}){
  return (
    <Card>
      <Heart><FiHeart /></Heart>
      <Img src={product.image} alt={product.title}/>
      <Title>{product.title.length > 70 ? product.title.slice(0,70) + "..." : product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Btn>Buy Now</Btn>
    </Card>
  );
}
