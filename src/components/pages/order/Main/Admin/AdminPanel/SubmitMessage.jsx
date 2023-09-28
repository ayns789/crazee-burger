import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import { theme } from '../../../../../../theme';

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className='icon' />
      <span className='message'>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  font-size: small;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }

  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.XS};
    color: ${theme.colors.success};
  }
`;
