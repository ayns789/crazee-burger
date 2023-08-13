import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import { useParams } from 'react-router-dom';

export default function Navbar() {
  const { username } = useParams();
  return (
    <>
      <NavbarStyled>
        <div className='left-side'>Left</div>
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
  .left-side {
    background-color: antiquewhite;
  }
`;
