import styled from 'styled-components';

export default function Basket() {
  return (
    <BasketStyled>
      <div className='head'>Head</div>
      <div className='body'>Body</div>
      <div className='footer'>Foot</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  .head {
    background: red;
  }
  .body {
    background: yellow;
  }
  .footer {
    background: blue;
  }
`;
