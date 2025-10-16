import React from "react";
import styled from "styled-components";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Nav = styled.header`
  background: #fff;
  border-bottom: 1px solid rgba(15,23,42,0.06);
  display:flex;
  align-items:center;
  gap:20px;
  padding:14px 48px;
  position:sticky;
  top:0;
  z-index:50;
`;

const Left = styled.div` display:flex; align-items:center; gap:20px;`;
const Logo = styled.div` font-weight:700; font-size:20px; letter-spacing:0.6px;`;
const Search = styled.div`
  display:flex; align-items:center;
  background:#f2f4f6;
  padding:8px 12px;
  border-radius:8px;
  width:420px;
`;
const Input = styled.input`
  border:none; outline:none; background:transparent; margin-left:8px; width:100%;
  font-size:14px;
`;

const Links = styled.nav`
  margin-left:24px;
  display:flex; gap:18px; align-items:center;
  a { color:#374151; font-size:14px; }
`;

const Right = styled.div` margin-left:auto; display:flex; gap:14px; align-items:center;`;
const IconBtn = styled.div`
  background:transparent; border-radius:8px; padding:8px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  color:#374151;
  &:hover { background: rgba(0,0,0,0.03); }
`;

export default function Navbar(){
  return (
    <Nav>
      <Left>
        <Logo>cyber</Logo>
        <Search>
          <FiSearch />
          <Input placeholder="Search products, e.g. iPhone" />
        </Search>
        <Links>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </Links>
      </Left>
      <Right>
        <IconBtn title="Wishlist"><FiHeart size={18} /></IconBtn>
        <IconBtn title="Cart"><FiShoppingCart size={18} /></IconBtn>
        <IconBtn title="Account"><FiUser size={18} /></IconBtn>
      </Right>
    </Nav>
  );
}
