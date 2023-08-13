import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Navbar() {
  const { username } = useParams();
  return (
    <>
      <NavbarStyled>
        <h1>
          Bonjour <UsernameStyled>{username}</UsernameStyled>
        </h1>
        <Link to='/'>
          <button>Déconnexion</button>
        </Link>
      </NavbarStyled>
    </>
  );
}

const UsernameStyled = styled.span`
  color: orange;
`;

const NavbarStyled = styled.div`
  background: blue;
`;
