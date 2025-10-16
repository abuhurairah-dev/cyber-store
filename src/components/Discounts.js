import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Wrap = styled.section` padding:20px 48px; background:transparent; `;
const Title = styled.h3` margin-bottom:14px; `;
const Row = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap:18px;
`;

const Card = styled.div`
  background:#fff; border-radius:12px; padding:14px; text-align:center;
  box-shadow: 0 6px 18px rgba(12,15,20,0.04);
`;

const Img = styled.img` width:100%; height:120px; object-fit:contain; `;
const Price = styled.div` font-size:16px; font-weight:700; margin-top:10px; `;

export default function Discounts(){
  const [items,setItems] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
      .then(res => setItems(res.data.slice(0,4)))
      .catch(err=>console.error(err));
  },[]);
  return (
    <Wrap>
      <Title>Discounts up to -50%</Title>
      <Row>
        {items.map(it => (
          <Card key={it.id}>
            <Img src={it.image} alt={it.title} />
            <div style={{marginTop:8, fontSize:13}}>{it.title.length>50?it.title.slice(0,50)+"...":it.title}</div>
            <Price>${it.price.toFixed(2)}</Price>
          </Card>
        ))}
      </Row>
    </Wrap>
  );
}
