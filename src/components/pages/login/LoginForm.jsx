import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';

import { theme } from '../../../theme';

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
        <div className='input'>
          <div className='input-with-icon'>
            <BsPersonCircle className='icon' />
            <input
              type='text'
              placeholder='Entrez votre prénom'
              value={inputValue}
              onChange={handleChange}
              required
            />
          </div>
          <button className='button-with-icon'>
            <span>Accéder à mon espace</span>
            <IoChevronForward className='icon' />
          </button>
        </div>
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
  .input {
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.P0};
    font-family: Arial;
    letter-spacing: 0em;

    .input-with-icon {
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 18px 24px;
      margin: 18px 0px;

      .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
      }

      input {
        width: 100%;
        border: none;
        font-size: 15px;
        color: #17161a;
      }

      &::placeholder {
        background: white;
        color: lightgrey;
      }
    }

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
