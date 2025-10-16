import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Nav = styled.header`
  background: #fff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 48px;
  position: sticky;
  top: 0;
  z-index: 50;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.6px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background: #f2f4f6;
  padding: 8px 12px;
  border-radius: 8px;
  width: 420px;

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  margin-left: 8px;
  width: 100%;
  font-size: 14px;
`;

const Links = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-left: 24px;

  a {
    color: #374151;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #111827;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const IconBtn = styled.div`
  background: transparent;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background: #fff;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 24px;
  transition: right 0.3s ease;
  z-index: 100;

  a {
    color: #111827;
    font-size: 16px;
    margin-bottom: 18px;
    text-decoration: none;

    &:hover {
      color: #2563eb;
    }
  }
`;

const CloseBtn = styled.div`
  align-self: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <Left>
          <Logo>cyber</Logo>
          <Search>
            <FiSearch />
            <Input placeholder="Search products, e.g. iPhone" />
          </Search>
        </Left>

        <Links>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </Links>

        <Right>
          <IconBtn title="Wishlist"><FiHeart size={18} /></IconBtn>
          <IconBtn title="Cart"><FiShoppingCart size={18} /></IconBtn>
          <IconBtn title="Account"><FiUser size={18} /></IconBtn>

          <MenuToggle onClick={() => setMenuOpen(true)}>
            <FiMenu size={22} />
          </MenuToggle>
        </Right>
      </Nav>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen}>
        <CloseBtn onClick={() => setMenuOpen(false)}>
          <FiX size={22} />
        </CloseBtn>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Blog</a>
      </MobileMenu>
    </>
  );
}
