import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Profile from './Profile';

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className='admin-button'>Admin button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

NavbarRightSide.propTypes = {
  username: PropTypes.string.isRequired,
};

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* .admin-button {
    background: lightblue;
  } */
`;
