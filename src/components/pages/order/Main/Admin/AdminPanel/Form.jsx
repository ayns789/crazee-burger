import styled from 'styled-components';

import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import PropTypes from 'prop-types';
import { getInputTextsConfig } from './getInputTextConfig';
import React from 'react';

const Form = React.forwardRef(({ product, children, onSubmit, onChange }, ref) => {
  const inputTexts = getInputTextsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />

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
            onChange={onChange}
            version='success'
            ref={ref && input.name === 'title' ? ref : null}
          />
        ))}
      </div>

      <div className='form-footer'>{children}</div>
    </FormStyled>
  );
});

Form.displayName = 'Form';

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  inputs: PropTypes.array,
  product: PropTypes.object,
  children: PropTypes.element,
};

const FormStyled = styled.form`
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
  .form-footer {
    /* grid-area: 4/2 / 5/3; */
    grid-area: 4/-2 / -1/-1;
    display: flex;
    align-items: center;
    /* height: 2.5em; */
    position: relative;
    top: 3px;
  }
`;
