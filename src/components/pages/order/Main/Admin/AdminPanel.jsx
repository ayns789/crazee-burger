import styled from 'styled-components';
import { theme } from '../../../../../theme';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminPanel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddSelected && 'Ajouter un produit'}
      {isEditSelected && 'Modifier un produit'}
    </AdminPanelStyled>
  );
}

AdminPanel.propTypes = {
  isEditSelected: PropTypes.bool,
  setIsEditTabSelected: PropTypes.func,
  isAddSelected: PropTypes.bool,
  setIsAddTabSelected: PropTypes.func,
};

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
