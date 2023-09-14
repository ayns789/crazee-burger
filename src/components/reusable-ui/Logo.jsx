import { styled } from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types';

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>
        Crazee
        {<img src={'/images/logo-orange.png'} className='logo' alt='crazee-burger logo' />}
        Burger
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
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin-bottom: -18px;
    margin-left: 2px;
    margin-right: 6px;
    /* transform: scale(1.5); */
  }
  background-size: cover;
  @media screen and (max-width: 614px) {
    img {
      margin-bottom: 0;
    }
  }
`;
