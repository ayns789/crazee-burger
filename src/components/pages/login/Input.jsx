import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export default function Input({ value, onChange, Icon, ...extraProps }) {
  console.log('restProps : ', extraProps);

  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
};

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0px;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    width: 100%;
    border: none;
    font-size: 15px;
    color: #17161a;
  }

  &::placeholder {
    background: white;
    color: lightgrey;
  }
`;
