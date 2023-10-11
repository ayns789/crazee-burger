import styled from 'styled-components';
import { theme } from '../../../../../../theme';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getTabsConfig } from '../getTabsConfig';
import { getTabSelected } from '../getTabsConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  box-sizing: border-box;
  padding: 30px 5%;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  /* border-bottom-right-radius: ${theme.borderRadius.extraRound}; */
`;
