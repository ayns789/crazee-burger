import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { useContext } from 'react';
import { useState } from 'react';

const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: '',
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

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
          <span>Aucune image</span>
        )}
      </div>

      <div className='input-fields'>
        <input
          key='title'
          name='title'
          type='text'
          placeholder='Nom du produit (ex: Super Burger)'
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          key='imageSource'
          name='imageSource'
          type='text'
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          key='price'
          name='price'
          type='text'
          placeholder='prix'
          value={newProduct.price}
          onChange={handleChange}
        />
      </div>
      <div className='submit-button'>
        <button>Submit button</button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  .image-preview {
    background: lightcoral;
    // surface, on commence toujours par ligne, puis colonne:
    // début ligne 1 / colonne 1, fin ligne 4 / colonne 2
    grid-area: 1 / 1 / 4 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: center;
    }
  }
  .input-fields {
    background: lightblue;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .submit-button {
    background: lightgreen;
    grid-area: 4/ 2 / 5 / 3;

    display: grid;
    width: 40%;
  }
`;
