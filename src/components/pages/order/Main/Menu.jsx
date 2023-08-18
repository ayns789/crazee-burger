import { useState } from 'react';
import styled from 'styled-components';
import { fakeProductsPasta } from '../../../../fakeData/fakeProducts';
import { theme } from '../../../../theme';
import Card from './Card';

export default function Menu() {
  const [products, setProducts] = useState(fakeProductsPasta);
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <Card
            key={product.title}
            title={product.title}
            imageSource={product.imageSource}
            price={product.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
