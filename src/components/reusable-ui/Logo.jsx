import { styled } from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types';

export default function Logo({ className }) {
  return (
    <LogoStyled className={className}>
      <h1>
        crazee{' '}
        {<img src={'/images/F03_logo-orange.png'} className='logo' alt='Logo-crazee-burger' />}{' '}
        burger
      </h1>
    </LogoStyled>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

const LogoStyled = styled.div`
  display: flex;
  h1 {
    display: inline;
    text-align: center;
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.0938rem;
    line-height: 1em;
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin-bottom: -18px;
  }
  background-size: cover;
`;
