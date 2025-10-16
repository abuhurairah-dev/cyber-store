import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./ProductCard";

const Section = styled.section`
  padding: 28px 48px;
  background: transparent;

  @media (max-width: 1024px) {
    padding: 24px 32px;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: transparent;
  color: #374151;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${(p) => (p.active ? "#111827" : "transparent")};
    transition: background 0.3s ease;
  }

  &:hover {
    color: #111827;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const Grid = styled.div`
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

export default function ProductsSection() {
  const [tab, setTab] = useState("New Arrival");
  const [products, setProducts] = useState([]);
  const tabs = ["New Arrival", "Bestseller", "Featured"];

  useEffect(() => {
    let cancelled = false;
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (!cancelled) setProducts(res.data);
      })
      .catch((err) => console.error(err));
    return () => (cancelled = true);
  }, []);

  const filtered = (() => {
    if (!products.length) return [];
    if (tab === "New Arrival") return products.slice(0, 8);
    if (tab === "Bestseller") return products.slice(8, 16);
    return products.slice(16, 24);
  })();

  return (
    <Section>
      <Head>
        <Tabs>
          {tabs.map((t) => (
            <Tab key={t} active={t === tab} onClick={() => setTab(t)}>
              {t}
            </Tab>
          ))}
        </Tabs>
      </Head>

      <Grid>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </Section>
  );
}
