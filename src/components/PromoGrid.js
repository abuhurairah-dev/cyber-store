import React from "react";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 22px 48px;
  background: #fff;
  gap: 24px;

  /* 📱 Responsive layout */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
`;

const Big = styled.div`
  background: #f3f4f6;
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 220px;
  border-radius: 10px;

  /* 📱 Stack text on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 24px 16px;
  }
`;

const BigTitle = styled.h3`
  margin: 0;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const BigText = styled.p`
  color: #6b7280;
  margin-top: 8px;
  font-size: 14px;
  max-width: 460px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 100%;
  }
`;

const RightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (max-width: 992px) {
    gap: 24px;
  }
`;

const Tile = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background: ${({ even }) => (even ? "#f8fafc" : "#fff")};
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const TileImage = styled.img`
  width: 120px;
  height: 90px;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 150px;
    height: auto;
  }
`;

const TileTitle = styled.h4`
  margin: 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TileDesc = styled.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  max-width: 400px;
  line-height: 1.4;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 13px;
  }
`;

const ShopButton = styled.button`
  background: transparent;
  color: rgba(14, 13, 13, 0.6);
  border: 1px solid rgba(14, 13, 13, 0.6);
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(14, 13, 13, 0.1);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const BottomTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function PromoGrid() {
  return (
    <Grid>
      <Big>
        <div>
          <BigTitle>Playstation 5</BigTitle>
          <BigText>
            Incredibly powerful CPU, GPU, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </BigText>
        </div>
      </Big>

      <RightGrid>
        <Tile even>
          <TileImage src="/macbook1.jpg" alt="mac" />
          <div>
            <TileTitle>Macbook Air</TileTitle>
            <TileDesc>
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </TileDesc>
            <ShopButton>Shop Now</ShopButton>
          </div>
        </Tile>

        <BottomTiles>
          <Tile>
            <TileImage src="/air_pods1.jpg" alt="airpods" />
            <div>
              <TileTitle>Apple AirPods Max</TileTitle>
              <TileDesc>
                Computational audio. Listen, it’s powerful.
              </TileDesc>
            </div>
          </Tile>

          <Tile even>
            <TileImage src="/vision1.jpeg" alt="vision-pro" />
            <div>
              <TileTitle>Apple Vision Pro</TileTitle>
              <TileDesc>
                An immersive way to experience entertainment.
              </TileDesc>
            </div>
          </Tile>
        </BottomTiles>
      </RightGrid>
    </Grid>
  );
}
