import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    name, fieldType, value, placeholder, onChange,
  } = props;
  return (
    <div>
      <input
        type={fieldType}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
