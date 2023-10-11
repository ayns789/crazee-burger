import PropTypes from 'prop-types';
import { css, styled } from 'styled-components';

import { theme } from '../../theme';
import React from 'react';

const TextInput = React.forwardRef(
  ({ value, onChange, Icon, className, version = 'normal', ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className='icon'>{Icon && Icon}</div>
        <input ref={ref} value={value} onChange={onChange} {...extraProps} />
      </TextInputStyled>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
  className: PropTypes.string,
  version: PropTypes.string,
};

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 1.125rem 1.5rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    width: 100%;
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  // 1/
  /* ${(props) => {
    if (props.version === 'normal') return extraStyleNormal;
    if (props.version === 'success') return extraStyleSuccess;
  }}; */

  // 2/ dynamic
  /* ${(props) => extraStyle[props.version]} */

  // 3/ destructuring dynamic
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;
const extraStyleSuccess = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
};
