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

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0QTOAdZu3bcdNH0QqW8U2NpKmgkgqcY7-wRo3H4OKvki1XhcpFUDHoAHr-zgEr16zlE&usqp=CAU

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };

    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    event.preventDefault();
    // on récupère la valeur de tous les champs
    const newValue = event.target.value;
    // on récupère le nom de tous les champs
    const name = event.target.name;
    // on met à jour newProduct avec nom et valeur des champs
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className='image-preview'>Image Preview</div>
      <div className='input-fields'>
        <input
          key='title'
          name='title'
          type='text'
          placeholder='Nom du produit'
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          key='imageSource'
          name='imageSource'
          type='text'
          placeholder='image url'
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
