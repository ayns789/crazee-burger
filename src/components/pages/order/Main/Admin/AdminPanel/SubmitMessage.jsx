import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import { theme } from '../../../../../../theme';

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      {/* <div className='contentSubmitMsg'> */}
      <FiCheck className='icon' />
      <span className='message'>Ajouté avec succès !</span>
      {/* </div> */}
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  font-size: small;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* position: relative; */
  left: 100%;
  top: 0%;
  position: absolute;

  /* .contentSubmitMsg {
    left: 10px;
    position: absolute;
  } */

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
