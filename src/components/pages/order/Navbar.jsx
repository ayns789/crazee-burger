import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import { useParams } from 'react-router-dom';
import Logo from '../../reusable-ui/Logo';
import { theme } from '../../../theme';

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
  background: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
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
