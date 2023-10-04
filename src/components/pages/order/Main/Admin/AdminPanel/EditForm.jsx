import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import styled from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './getInputTextConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
// import HintMessage from './HintMessage';

export default function EditForm() {
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);
  const { productSelected } = useContext(OrderContext);
  // console.log('productSelected : ', productSelected);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    });
  };

  return (
    <EditFormStyled>
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
          />
        ))}
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

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
