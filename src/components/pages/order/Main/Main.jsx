import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu/Menu';
import Admin from './Admin/Admin';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';
import Basket from './Menu/Basket/Basket';

export default function Main() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className='menu-and-admin'>
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  height: calc(95vh - 10vh - 5vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};
  display: grid;
  /* grid-template-columns: 1fr; */
  // this code will be use for adding basket
  grid-template-columns: 25% 1fr;
  overflow: hidden;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
