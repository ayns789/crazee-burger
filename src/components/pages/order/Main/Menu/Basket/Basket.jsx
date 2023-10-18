import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import Header from '../../../../../reusable-ui/Header';

export default function Basket() {
  return (
    <BasketStyled>
      <Header>Head</Header>
      <div className='body'>Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;

  .body {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    flex: 1;
  }
`;
