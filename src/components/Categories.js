import React, { useRef } from "react";
import styled from "styled-components";
import {
  FiSmartphone,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiCpu,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const Wrap = styled.section`
  padding: 40px 48px;
  background: #fbfbfc;
  height: 300px;
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #111827;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ScrollBtn = styled.button`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  justify-content: flex-start;
  flex-wrap: nowrap; /* keeps horizontal scrolling */
`;

const Card = styled.div`
  flex: 0 0 auto;
  min-width: 230px;
  background: #fff;
  border-radius: 12px;
  padding: 20px 16px;
  box-shadow: 0 4px 10px rgba(2, 6, 23, 0.04);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(2, 6, 23, 0.08);
  }
`;

const IconWrap = styled.div`
  background: #f3f4f6;
  padding: 12px;
  border-radius: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #111827;
  font-weight: 500;
`;

export default function Categories() {
  const cats = [
    { name: "Phones", icon: <FiSmartphone size={18} /> },
    { name: "Smart Watches", icon: <FiWatch size={18} /> },
    { name: "Cameras", icon: <FiCamera size={18} /> },
    { name: "Headphones", icon: <FiHeadphones size={18} /> },
    { name: "Computers", icon: <FiCpu size={18} /> },
    { name: "Gaming", icon: <FiCpu size={18} /> },
    { name: "Accessories", icon: <FiHeadphones size={18} /> }
  ];

  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <Wrap>
      <Header>
        <Title>Browse By Category</Title>
        <ButtonGroup>
          <ScrollBtn onClick={scrollLeft}>
            <FiChevronLeft size={18} />
          </ScrollBtn>
          <ScrollBtn onClick={scrollRight}>
            <FiChevronRight size={18} />
          </ScrollBtn>
        </ButtonGroup>
      </Header>

      <Row ref={rowRef}>
        {cats.map((c, i) => (
          <Card key={i}>
            <IconWrap>{c.icon}</IconWrap>
            <Label>{c.name}</Label>
          </Card>
        ))}
      </Row>
    </Wrap>
  );
}
