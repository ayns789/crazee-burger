import styled from 'styled-components';

import { theme } from '../../../../../theme';
import Card from '../../../../reusable-ui/Card';
import { formatPrice } from '../../../../../utils/maths';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const DEFAULT_IMAGE = '/images/coming-soon.png';

export default function Menu() {
  const { products, isModeAdmin, handleDelete, resetProduct } = useContext(OrderContext);

  if (products.length === 0) {
    return isModeAdmin ? <EmptyMenuAdmin resetProduct={resetProduct} /> : <EmptyMenuClient />;
  }

  return (
    <MenuStyled>
      {products.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
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
