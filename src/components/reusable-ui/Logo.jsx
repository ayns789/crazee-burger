import { styled } from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types';

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>
        pasta{' '}
        {<img src={'/images/logo_resto_italien.png'} className='logo' alt='Logo-pasta-piazza' />}{' '}
        piazza
      </h1>
    </LogoStyled>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
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
    text-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2em orange;
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin-bottom: -18px;
    transform: scale(1.5);
  }
  background-size: cover;
`;
