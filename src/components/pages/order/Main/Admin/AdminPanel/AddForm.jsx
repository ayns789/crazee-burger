import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { useContext } from 'react';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import Button from '../../../../../reusable-ui/Button';

const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: '',
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
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
      <div className='image-preview'>
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <span className='empty-image'>Aucune image</span>
        )}
      </div>

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
        {isSubmitted && (
          <div className='submit-message'>
            <FiCheck className='icon' />
            <span className='message'>Ajouté avec succès !</span>
          </div>
        )}
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

  .image-preview {
    /* background: lightcoral; */
    // surface, on commence toujours par ligne, puis colonne:
    // début ligne 1 / colonne 1, fin ligne 4 / colonne 2
    grid-area: 1 / 1 / 4 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: center;
    }
    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }
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
    .submit-message {
      font-size: small;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }

      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.XS};
        color: ${theme.colors.success};
      }
    }
  }
`;
