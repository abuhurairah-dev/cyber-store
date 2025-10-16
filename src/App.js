import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoGrid from "./components/PromoGrid";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import PopularStrip from "./components/PopularStrip";
import Discounts from "./components/Discounts";
import SaleBanner from "./components/SaleBanner";
import Footer from "./components/Footer";

const AppWrap = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppWrap>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <PromoGrid />
      <Categories />
      <ProductsSection />
      <PopularStrip />
      <Discounts />
      <SaleBanner />
      <Footer />
    </AppWrap>
  );
}

export default App;
