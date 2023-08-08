import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>
        crazee{' '}
        {<img src={'/images/F03_logo-orange.png'} className='logo' alt='Logo-crazee-burger' />}{' '}
        burger
      </h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  h1 {
    display: inline;
    text-align: center;
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P7};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.0938rem;
    line-height: 1em;
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 12.5rem;
    height: 9.375rem;
    margin: 0 0.3125rem -1.875rem 0;
  }
`;
