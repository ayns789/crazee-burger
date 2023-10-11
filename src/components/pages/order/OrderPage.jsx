import { styled } from 'styled-components';
import { useRef, useState } from 'react';

import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeProducts';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState('add');
  const [products, setProducts] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState({});
  const titleEditRef = useRef();

  const handleAdd = (newProduct) => {
    // 1. Copie du tableau
    const menuCopy = deepClone(products);

    // 2. manip de la copie
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update le tableau
    setProducts(menuUpdated);
  };

  const handleDelete = (idProduct) => {
    // alert('button clicked');
    const productsCopy = deepClone(products);
    const productsUpdated = productsCopy.filter((product) => product.id !== idProduct);
    setProducts(productsUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    // console.log('productBeingEdited : ', productBeingEdited);
    const menuCopy = deepClone(products);

    const indexOfproductBeingEdited = menuCopy.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    // console.log('indexOfproductBeingEdited : ', indexOfproductBeingEdited);

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
    titleEditRef,
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
