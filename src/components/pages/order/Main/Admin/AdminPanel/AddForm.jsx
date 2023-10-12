import { useContext, useState } from 'react';

import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import ProductForm from './ProductForm';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      // id: new Date.getTime(),
      id: crypto.randomUUID(),
    };
    // console.log('newProduct is : ', newProductToAdd);
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMsg();
  };

  const handleChange = (event) => {
    event.preventDefault();
    // // on récupère la valeur de tous les champs
    // const newValue = event.target.value;
    // // on récupère le nom de tous les champs
    // const name = event.target.name;
    // // on met à jour newProduct avec nom et valeur des champs
    // setNewProduct({ ...newProduct, [name]: newValue });

    // // en destructuring :
    // const { name, value } = event.target;
    // setNewProduct({ ...newProduct, [name]: value });

    // autre façon de procéder :
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    console.log('typoOf product : ', typeof newProduct);
  };

  return (
    <ProductForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      product={newProduct}
      isSubmitted={isSubmitted}
    />
  );
}
