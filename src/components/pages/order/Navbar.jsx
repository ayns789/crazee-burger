import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import { useParams } from 'react-router-dom';
import Logo from '../../reusable-ui/Logo';

export default function Navbar() {
  const { username } = useParams();
  return (
    <>
      <NavbarStyled>
        <Logo className='logo' />
        <NavbarRightSide username={username} />
      </NavbarStyled>
    </>
  );
}

const NavbarStyled = styled.div`
  background: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px 0 20px;
  .logo {
    h1 {
      padding-bottom: 13px;
    }
  }
`;
