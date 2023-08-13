import { styled } from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open-sans', sans-serif;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
