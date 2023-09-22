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
          Icon={<BsPersonCircle />}
          required
          className='input-login'
        />

        <PrimaryButton label={'Accéder à mon espace'} Icon={<IoChevronForward />} />
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  .bloc_text {
    text-align: center;
    font-family: 'Amatic SC', cursive;
    /* font-family: 'Josefin Sans', cursive; */
    font-weight: ${theme.fonts.weights.bold};
    h2 {
      font-size: ${theme.fonts.size.P5};
      letter-spacing: 0em;
      color: ${theme.colors.white};
    }
    hr {
      margin-bottom: ${(theme.gridUnit * 5) / 16}rem;
      border: 0.0938rem solid ${theme.colors.primary};
    }
    h3 {
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.white};
      margin-bottom: 0;
    }
  }

  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.size.SM};
  font-family: Arial;
  letter-spacing: 0em;

  .input-login {
    margin: 1.125rem 0rem;
  }
`;
