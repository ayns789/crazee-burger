import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';

import { theme } from '../../../theme';
import TextInput from '../../reusable-ui/TextInput';

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
        <TextInput
          value={inputValue}
          type='text'
          onChange={handleChange}
          placeholder={'Entrez votre prénom'}
          Icon={<BsPersonCircle className='icon' />}
          required
        />
        <button className='button-with-icon'>
          <span>Accéder à mon espace</span>
          <IoChevronForward className='icon' />
        </button>
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

  button {
    width: 400px;
    height: 53px;
    /* top: 345.3125px;
      left: 32px; */
    padding: 18px 106.203125px 18px 106.203125px;
    border-radius: 5px;
    border: 1px;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    line-height: 15px;
    text-align: center;
  }
  button:active,
  button:focus,
  button:visited {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
