import PropTypes from 'prop-types';
import { theme } from '../../theme';
import { styled } from 'styled-components';

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && <div className='icon'>{Icon}</div>}
    </PrimaryButtonStyled>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.object,
};

const PrimaryButtonStyled = styled.button`
  width: 25rem;
  height: 3.3125rem;
  /* padding: 1.125rem 6.6375rem 1.125rem 6.6375rem; */
  border-radius: ${theme.borderRadius.round};
  border: 1px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};
  text-align: center;

  &:active,
  &:focus,
  &:visited {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
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
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: ${(theme.gridUnit + 2) / 16}rem;
  }
`;
