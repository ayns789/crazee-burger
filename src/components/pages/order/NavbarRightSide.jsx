import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <h1>
        Bonjour <UsernameStyled>{username}</UsernameStyled>
      </h1>
      <Link to='/'>
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
}

NavbarRightSide.propTypes = {
  username: PropTypes.string.isRequired,
};

const UsernameStyled = styled.span`
  color: orange;
`;

const NavbarRightSideStyled = styled.div`
  background-color: aliceblue;
  h1 {
  }
`;
