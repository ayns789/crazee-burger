import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';

import { theme } from '../../../theme';
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // affichage
  return (
    <>
      <LoginFormStyled action='submit' onSubmit={handleSubmit}>
        <div className='bloc_text'>
          <h2>Bienvenue chez nous ! </h2>
          <hr />
          <h3>Connectez-vous</h3>
        </div>
        <TextInput
          value={inputValue}
          type='text'
          onChange={handleChange}
          placeholder={'Entrez votre prénom'}
          Icon={<BsPersonCircle className='icon' />}
          required
        />

        <PrimaryButton
          label={'Accéder à mon espace'}
          Icon={<IoChevronForward className='icon' />}
        />
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  .bloc_text {
    text-align: center;
    font-family: Amatic SC;
    font-weight: ${theme.weights.bold};
    h2 {
      font-size: ${theme.fonts.P5};
      line-height: 61px;
      letter-spacing: 0em;
      color: ${theme.colors.white};
    }
    hr {
      width: 400px;
      border: 1px solid ${theme.colors.primary_line};
    }
    h3 {
      font-size: ${theme.fonts.P4};
      color: ${theme.colors.white};
    }
  }

  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.P0};
  font-family: Arial;
  letter-spacing: 0em;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
