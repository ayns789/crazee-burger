import { styled } from 'styled-components';

export default function Main() {
  return (
    <MainStyled>
      <h2>Main</h2>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: green;
  flex: 1;
`;
