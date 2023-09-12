import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';

import ToastAdmin from './ToastAdmin';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info('Mode admin activé', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsModeAdmin(!isModeAdmin);
  };
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfChecked='DÉSACTIVER LE MODE ADMIN'
        labelIfUnchecked='ACTIVER LE MODE ADMIN'
        onToggle={displayToastNotification}
      />
      <Profile />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
