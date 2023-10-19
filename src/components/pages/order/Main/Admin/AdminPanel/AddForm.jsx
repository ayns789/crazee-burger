import { useContext } from 'react';

import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from './Form';
import OrderContext from '../../../../../../context/OrderContext';
// import Button from '../../../../../reusable-ui/Button';
// import SubmitMessage from './SubmitMessage';
import SubmitButton from './SubmitButton';
import { useSuccessMsg } from '../../../../../../hooks/useSuccessMsg';

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

  const { isSubmitted, displaySuccessMsg } = useSuccessMsg();

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
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
