import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Navbar() {
  const { username } = useParams();
  return (
    <>
      <NavbarStyled>
        <div className='left-side'>Left</div>
        <div className='right-side'>
          <h1>
            Bonjour <UsernameStyled>{username}</UsernameStyled>
          </h1>
          <Link to='/'>
            <button>Déconnexion</button>
          </Link>
        </div>
      </NavbarStyled>
    </>
  );
}

const UsernameStyled = styled.span`
  color: orange;
`;

const NavbarStyled = styled.div`
  background: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  .left-side {
    background-color: antiquewhite;
  }
  .right-side {
    background-color: aliceblue;
    h1 {
    }
  }
`;
