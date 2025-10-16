import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Wrap = styled.footer`
  background: #000;
  color: #c7c7c9;
  padding: 48px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Logo = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #9ca3af;
  max-width: 360px;
  line-height: 1.6;
`;

const Heading = styled.h4`
  color: #fff;
  font-size: 15px;
  margin-bottom: 8px;
`;

const Link = styled.a`
  display: block;
  color: #bdbfc3;
  font-size: 14px;
  margin-bottom: 6px;
  text-decoration: none;
`;

const Social = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  svg {
    color: #9ca3af;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Col>
        <Logo>Cyber</Logo>
        <Text>
          We are a residential interior design firm located in Portland. Our boutique studio offers more than
        </Text>
        <Social>
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </Social>
      </Col>

      <Col>
        <Heading>Services</Heading>
        <Link href="#">Bonus program</Link>
        <Link href="#">Gift cards</Link>
        <Link href="#">Credit and payment</Link>
        <Link href="#">Service contracts</Link>
        <Link href="#">Non-cash account</Link>
        <Link href="#">Payment</Link>
      </Col>

      <Col>
        <Heading>Assistance to the buyer</Heading>
        <Link href="#">Find an order</Link>
        <Link href="#">Terms of delivery</Link>
        <Link href="#">Exchange and return of goods</Link>
        <Link href="#">Guarantee</Link>
        <Link href="#">Frequently asked questions</Link>
        <Link href="#">Terms of use of the site</Link>
      </Col>
    </Wrap>
  );
}