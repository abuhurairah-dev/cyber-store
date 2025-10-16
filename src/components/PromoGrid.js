import React from "react";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 22px 48px;
  background: #fff;
`;

const Big = styled.div`
  background: #f3f4f6;
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 180px;
`;

const BigTitle = styled.h3`
  margin: 0;
  font-size: 22px;
`;

const BigText = styled.p`
  color: #6b7280;
  margin-top: 8px;
  font-size: 13px;
  max-width: 420px;
`;

const RightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
`;

const Tile = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background: ${({ even }) => (even ? "#f8fafc" : "#fff")};
`;

const TileImage = styled.img`
  width: 110px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
`;

const TileTitle = styled.h4`
  margin: 0;
  font-size: 16px;
`;

const TileDesc = styled.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 13px;
`;

const ShopButton = styled.button`
  background:transparent;
  color:rgba(14, 13, 13, 0.6);
  border:1px solid rgba(14, 13, 13, 0.6);
  padding:10px 18px;
  border-radius:6px;
  cursor:pointer;
  margin-top:15px;
`;

const BottomTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;


export default function PromoGrid() {
  return (
    <Grid>
      <Big>
        <div>
          <BigTitle>Playstation 5</BigTitle>
          <BigText>
            Incredibly powerful CPU, GPU, and an SSD with integrated I/O will redefine your PlayStation experience.
          </BigText>
        </div>
      </Big>

      <RightGrid>
        <Tile even>
          <TileImage src="https://via.placeholder.com/120x90?text=Macbook" alt="mac" />
          <div>
            <TileTitle>Macbook Air</TileTitle>
            <TileDesc>
              The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </TileDesc>
            <ShopButton>Shop Now</ShopButton>
          </div>
        </Tile>

        <BottomTiles>
            <Tile>
            <TileImage src="https://via.placeholder.com/120x90?text=AirPods" alt="airpods" />
            <div>
                <TileTitle>Apple AirPods Max</TileTitle>
                <TileDesc>Computational audio. Listen, it’s powerful.</TileDesc>
            </div>
            </Tile>

            <Tile even>
            <TileImage src="https://via.placeholder.com/120x90?text=VisionPro" alt="vision-pro" />
            <div>
                <TileTitle>Apple Vision Pro</TileTitle>
                <TileDesc>An immersive way to experience entertainment.</TileDesc>
            </div>
            </Tile>
        </BottomTiles>

      </RightGrid>
    </Grid>
  );
}