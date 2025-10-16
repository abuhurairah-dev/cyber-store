import styled from "styled-components";

const Wrap = styled.section`
  padding: 32px 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0;
  align-items: stretch;
`;

const Card = styled.div`
  flex: 0 0 260px;
  background: ${({ bg }) => bg};
  color: ${({ dark }) => (dark ? "#f9fafb" : "#111827")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 6px 18px rgba(12, 15, 20, 0.06);
  border-radius: 0;
`;

const Img = styled.div`
  height: 350px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #9ca3af;
  border-radius: 0;
`;

const Title = styled.h4`
  margin: 16px 0 8px 0;
  font-size: 25px;
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  color: inherit;
`;

const Btn = styled.button`
  background: transparent;
  color: ${({ dark }) => (dark ? "#f9fafb" : "rgba(14, 13, 13, 0.6)")};
  border: 1px solid ${({ dark }) => (dark ? "#f9fafb" : "rgba(14, 13, 13, 0.6)")};
  padding: 6px 12px;
  border-radius: 0;
  cursor: pointer;
  font-size: 12px;
  align-self: flex-start;
  margin-top: 30px;
`;

export default function PopularStrip() {
  const items = [
    { title: "Popular Products", img: "Watch", bg: "#f3f4f6", dark: false },
    { title: "iPad Pro", img: "iPad", bg: "#d1d5db", dark: false },
    { title: "Samsung Galaxy", img: "Galaxy", bg: "#374151", dark: true },
    { title: "Macbook Pro", img: "Macbook", bg: "#000", dark: true },
  ];

  const description =
    "Pick electronics to magnificent 12.9-inch Retina display, incredible performance, multitasking and versatility.";

  return (
    <Wrap>
      {items.map((it, i) => (
        <Card key={i} bg={it.bg} dark={it.dark}>
          <div>
            <Img>{it.img}</Img>
            <Title>{it.title}</Title>
            <Desc>{description}</Desc>
          </div>
          <Btn dark={it.dark}>Shop Now</Btn>
        </Card>
      ))}
    </Wrap>
  );
}