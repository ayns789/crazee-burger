import styled from 'styled-components';
import Header from '../../../../../reusable-ui/Header';
import { theme } from '../../../../../../theme';

export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </FooterStyled>
    </Header>
  );
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  span {
    height: 25px;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
    /* line-height: 25px; */
    letter-spacing: 0em;
    text-align: left;
    color: ${theme.colors.white};
  }
`;
