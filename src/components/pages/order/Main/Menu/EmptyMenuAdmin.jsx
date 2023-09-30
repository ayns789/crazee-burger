import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Button from '../../../../reusable-ui/Button';

export default function EmptyMenuAdmin({ resetMenu }) {
  return (
    <EmptyMenuAdminStyled>
      <span className='title'>Pas de produits</span>
      <div className='description'>
        <Button label={'Générer de nouveaux produits'} onClick={resetMenu} />
      </div>
    </EmptyMenuAdminStyled>
  );
}

EmptyMenuAdmin.propTypes = {
  resetMenu: PropTypes.func,
};

const EmptyMenuAdminStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // permet de diminuer la largeur du bouton resetMenu
  /* margin-top: 50px; */
  .title,
  .description {
    text-align: center;
    font-family: 'Amatic SC', cursive;
    color: ${theme.colors.greyBlue};
  }
  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }
  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }
`;
