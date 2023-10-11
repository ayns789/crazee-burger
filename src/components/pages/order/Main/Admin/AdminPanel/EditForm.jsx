import styled from 'styled-components';

import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './getInputTextConfig';
import { theme } from '../../../../../../theme';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // update form
    handleEdit(productBeingUpdated); // update data products list
  };

  return (
    <EditFormStyled>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          titleEditRef.current.focus();
        }}
      >
        Click
      </button> */}
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />

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
            ref={input.name === 'title' ? titleEditRef : null}
          />
        ))}
      </div>
      <div className='submit'>
        <span className='sentence'>
          Cliquer sur un produit du menu pour le modifier{' '}
          <span className='live-update'>en temps réel</span>
        </span>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};

      .live-update {
        text-decoration: underline;
      }
    }
  }
`;
