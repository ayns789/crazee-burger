import { styled } from 'styled-components';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { useState } from 'react';
import { fakeMenu } from '../../../fakeData/fakeProducts';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState('add');
  const [products, setProducts] = useState(fakeMenu.LARGE);

  const handleAdd = (newProduct) => {
    // 1. Copie du tableau
    const menuCopy = [...products];

    // 2. manip de la copie
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update le tableau
    setProducts(menuUpdated);
  };

  const handleDelete = (idProduct) => {
    // alert('button clicked');
    const productsCopy = [...products];
    const productsUpdated = productsCopy.filter((product) => product.id !== idProduct);
    setProducts(productsUpdated);
  };

  const resetProduct = () => {
    setProducts(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAdd,
    handleDelete,
    resetProduct,
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
