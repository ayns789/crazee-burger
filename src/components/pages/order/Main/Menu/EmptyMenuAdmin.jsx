import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyMenuAdmin({ resetProduct }) {
  return (
    <EmptyMenuAdminStyled>
      <span className='spanData'>Pas de produits</span>
      <div className='containerBtnData'>
        <button className='btnData' onClick={resetProduct}>
          Générer de nouveaux produits
        </button>
      </div>
    </EmptyMenuAdminStyled>
  );
}

EmptyMenuAdmin.propTypes = {
  resetProduct: PropTypes.func,
};

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .spanData {
    font-weight: bold;
    font-size: 20px;
  }
  .containerBtnData {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 18em;
    .btnData {
      background: ${theme.colors.primary};
      color: white;
      font-size: 15px;
      font-weight: bold;
      height: 3em;
      border-radius: 15px;
      border: none;
      padding: 0 25px 0 25px;
      &:hover {
        background: white;
        color: ${theme.colors.primary};
        transition: 0.5s;
        border: 1px solid ${theme.colors.primary};
      }
    }
  }
`;
