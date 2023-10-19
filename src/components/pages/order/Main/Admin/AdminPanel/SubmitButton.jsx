import styled from 'styled-components';
import Button from '../../../../../reusable-ui/Button';
import SubmitMessage from './SubmitMessage';
// import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <SubmitButtonStyled>
        <div className='height'>
          <Button
            className='submit-button'
            label={'Ajouter un nouveau produit au menu'}
            version={'success'}
          />
          {isSubmitted && <SubmitMessage />}
        </div>
      </SubmitButtonStyled>
    </>
  );
}

SubmitButton.propTypes = {
  isSubmitted: PropTypes.bool,
};

const SubmitButtonStyled = styled.div`
  /* width: 50%; */
  height: 100%;
  .height {
    position: relative;
  }
`;
