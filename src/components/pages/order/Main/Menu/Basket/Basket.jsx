import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import Total from './Total';
import Footer from './Footer';
import { formatPrice } from '../../../../../../utils/maths';

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className='body'>Body</div>

      <Footer />
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
