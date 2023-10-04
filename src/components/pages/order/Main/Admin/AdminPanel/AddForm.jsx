import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { useContext } from 'react';
import { useState } from 'react';

// import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
// import { FaHamburger } from 'react-icons/fa';
// import { BsFillCameraFill } from 'react-icons/bs';
// import { MdOutlineEuro } from 'react-icons/md';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './getInputTextConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

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

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />

      <div className='input-fields'>
        {inputTexts.map((input) => (
          <TextInput
            // key={input.key}
            // name={input.name}
            // placeholder={input.placeholder}
            // value={input.value}
            // onChange={handleChange}
            // Icon={input.Icon}
            // version='minimalist'
            {...input}
            key={input.key}
            onChange={handleChange}
            version='success'
          />
        ))}
      </div>
      <div className='submit'>
        <Button
          className='submit-button'
          label={'Ajouter un nouveau produit au menu'}
          version={'success'}
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
    /* grid-area: 4/2 / 5/3; */
    grid-area: 4/-2 / -1/-1;
    display: flex;
    align-items: center;
    /* height: 2.5em; */
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
