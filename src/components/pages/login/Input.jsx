import { BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Input({ value, onChange, placeholder, required }) {
  return (
    <div className='input-with-icon'>
      <BsPersonCircle className='icon' />
      <input
        value={value}
        onChange={onChange}
        type='text'
        placeholder={placeholder}
        required={required ? true : false}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
