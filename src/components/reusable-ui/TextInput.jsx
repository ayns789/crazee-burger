import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  console.log('restProps : ', extraProps);

  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
};

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 1.125rem 1.5rem;
  margin: 1.125rem 0rem;

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.gridUnit / 16}rem;
    color: ${theme.colors.greySemiDark};
  }

  input {
    width: 100%;
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
