import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { useContext } from 'react';
import { useState } from 'react';

// import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';

export const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: '',
};

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

  // const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      // id: new Date.getTime(),
      id: crypto.randomUUID(),
    };
    console.log('newProduct is : ', newProductToAdd);
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMsg();
  };

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
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
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />

      <div className='input-fields'>
        <TextInput
          key='title'
          name='title'
          type='text'
          placeholder='Nom du produit (ex: Super Burger)'
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          className='input-addForm'
          version='minimalist'
        />
        <TextInput
          key='imageSource'
          name='imageSource'
          type='text'
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          className='input-addForm'
          version='minimalist'
        />
        <TextInput
          key='price'
          name='price'
          type='text'
          placeholder='prix'
          value={newProduct.price}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          className='input-addForm'
          version='minimalist'
        />
      </div>
      <div className='submit'>
        <Button
          className='submit-button'
          label={'Ajouter un nouveau produit au menu'}
          version={'minimalist'}
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    grid-area: 4/2 / 5/3;
    display: flex;
    align-items: center;
    /* height: 2.5em; */
    position: relative;
    top: 3px;

    .submit-button {
      width: 50%;
      height: 100%;
    }
  }
`;
