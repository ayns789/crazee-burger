import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className='empty-message'>Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  flex: 1;

  .empty-message {
    border: 1px solid red;
    /* height: calc(95vh - 10vh - 70px - 70px); */
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
  }
`;
