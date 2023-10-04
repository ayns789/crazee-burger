import { styled } from 'styled-components';
import { useState } from 'react';

import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeProducts';
import { EMPTY_PRODUCT } from '../../../enums/product';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState('edit');
  const [products, setProducts] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState({});

  const handleAdd = (newProduct) => {
    // 1. Copie du tableau
    const menuCopy = JSON.parse(JSON.stringify(products));

    // 2. manip de la copie
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update le tableau
    setProducts(menuUpdated);
  };

  const handleDelete = (idProduct) => {
    // alert('button clicked');
    const productsCopy = JSON.parse(JSON.stringify(products));
    const productsUpdated = productsCopy.filter((product) => product.id !== idProduct);
    setProducts(productsUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    // console.log('productBeingEdited : ', productBeingEdited);
    const menuCopy = JSON.parse(JSON.stringify(products));

    const indexOfproductBeingEdited = menuCopy.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    console.log('indexOfproductBeingEdited : ', indexOfproductBeingEdited);

    menuCopy[indexOfproductBeingEdited] = productBeingEdited;

    setProducts(menuCopy);
  };

  const resetMenu = () => {
    setProducts(fakeMenu.LARGE);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    newProduct,
    setNewProduct,
    handleAdd,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleEdit,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
