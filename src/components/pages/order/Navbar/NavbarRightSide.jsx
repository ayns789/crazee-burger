import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked='DÉSACTIVER LE MODE ADMIN'
        labelIfUnchecked='ACTIVER LE MODE ADMIN'
      />
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
`;
