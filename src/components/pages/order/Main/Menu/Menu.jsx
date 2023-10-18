import styled from 'styled-components';
import { useContext } from 'react';

import { theme } from '../../../../../theme';
import Card from '../../../../reusable-ui/Card';
import { formatPrice } from '../../../../../utils/maths';
import OrderContext from '../../../../../context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { checkIfProductIsSelected } from './helper';
import { EMPTY_PRODUCT } from '../../../../../enums/product';

const DEFAULT_IMAGE = '/images/coming-soon.png';

export default function Menu() {
  const {
    products,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    titleEditRef,
  } = useContext(OrderContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected('edit');
    const productClickedOn = products.find((product) => product.id === idProductClicked);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  if (products.length === 0) {
    return isModeAdmin ? <EmptyMenuAdmin resetMenu={resetMenu} /> : <EmptyMenuClient />;
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
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin ? isModeAdmin : null}
            isSelected={isModeAdmin && checkIfProductIsSelected(id, productSelected.id)}
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
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
