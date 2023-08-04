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
    text-align: center;
    font-family: Amatic SC;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P7};
    color: ${theme.colors.primary};
  }
  img {
    width: 200px;
    height: 150px;
    margin-bottom: -30px;
  }
`;
