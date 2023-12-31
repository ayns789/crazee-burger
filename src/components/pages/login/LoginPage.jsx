import { styled } from 'styled-components';
import Logo from '../../reusable-ui/Logo';
import LoginForm from './LoginForm';
import backgroundImg from '/images/burger-and-fries-background.jpg';
import { theme } from '../../../theme';

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={'logo-login-page'} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    background: url(${backgroundImg}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .logo-login-page {
    transform: scale(2.5);
    margin-bottom: 80px;

    img {
      transform: scale(1);
      filter: drop-shadow(0 0 0.75rem ${theme.colors.primary});
    }
  }
`;
