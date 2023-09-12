import { useState } from 'react';
import styled from 'styled-components';
import { fakeProductsPasta } from '../../../../fakeData/fakeProducts';
import { theme } from '../../../../theme';
import Card from '../../../reusable-ui/Card';
import { formatPrice } from '../../../../utils/maths';

export default function Menu() {
  const [products, setProducts] = useState(fakeProductsPasta);
  return (
    <MenuStyled>
      {products.map(({ title, imageSource, price }) => {
        return (
          <Card
            key={title}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  // numbers of columns responsive
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
