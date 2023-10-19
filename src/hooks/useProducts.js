import { useState } from 'react';
import { fakeMenu } from '../fakeData/fakeProducts';
import { deepClone } from '../utils/array';

export const useProducts = () => {
  const [products, setProducts] = useState(fakeMenu.LARGE);

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

  return { products, setProducts, handleAdd, handleDelete, handleEdit, resetMenu };
};
