import PropTypes from 'prop-types';
import { theme } from '../../theme';
import { styled } from 'styled-components';

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.object,
};

const PrimaryButtonStyled = styled.button`
  width: 400px;
  height: 53px;
  padding: 18px 106.203125px 18px 106.203125px;
  border-radius: 5px;
  border: 1px;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.bold};
  line-height: 15px;
  text-align: center;

  &:active,
  &:focus,
  &:visited {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }

  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-out;
  }
  &:active {
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
