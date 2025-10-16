import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 32px 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    padding: 24px 36px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 18px 14px;
  }
`;

const Card = styled.div`
  background: ${({ bg }) => bg};
  color: ${({ dark }) => (dark ? "#f9fafb" : "#111827")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 6px 18px rgba(12, 15, 20, 0.06);
  border-radius: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

const Img = styled.div`
  height: 320px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  @media (max-width: 1024px) {
    height: 280px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Title = styled.h4`
  margin: 16px 0 8px 0;
  font-size: 25px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 12.5px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Btn = styled.button`
  background: transparent;
  color: ${({ dark }) => (dark ? "#f9fafb" : "rgba(14, 13, 13, 0.7)")};
  border: 1px solid ${({ dark }) => (dark ? "#f9fafb" : "rgba(14, 13, 13, 0.7)")};
  padding: 6px 14px;
  border-radius: 0;
  cursor: pointer;
  font-size: 12px;
  align-self: flex-start;
  margin-top: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ dark }) => (dark ? "#f9fafb" : "#111827")};
    color: ${({ dark }) => (dark ? "#111827" : "#fff")};
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 12px;
  }
`;

export default function PopularStrip() {
  const description =
    "Pick electronics to magnificent 12.9-inch Retina display, incredible performance, multitasking and versatility.";

  const items = [
    { title: "Apple Vision Pro", img: "/vision1.jpeg", bg: "#f3f4f6", dark: false },
    { title: "iPad Pro", img: "/iphone1.jpg", bg: "#d1d5db", dark: false },
    { title: "AirPods Pro", img: "/air_pods1.jpg", bg: "#374151", dark: true },
    { title: "MacBook Pro", img: "/macbook1.jpg", bg: "#000", dark: true },
  ];

  return (
    <Wrap>
      {items.map((it, i) => (
        <Card key={i} bg={it.bg} dark={it.dark}>
          <div>
            <Img>
              <img src={it.img} alt={it.title} />
            </Img>
            <Title>{it.title}</Title>
            <Desc>{description}</Desc>
          </div>
          <Btn dark={it.dark}>Shop Now</Btn>
        </Card>
      ))}
    </Wrap>
  );
}
