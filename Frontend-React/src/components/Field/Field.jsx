import React from 'react'
import PropTypes from "prop-types";

export const FIELD_TYPES = {
    DEFAULT: 1,
    CHECKBOX: 2
}

const Field = ({ label, textlabel, type, id, value, onChange, name, checked, placeholder, disabled, inputType }) => {
    switch (type) {
        case FIELD_TYPES.DEFAULT:
            return (
                <div className="input-wrapper">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type={inputType} id={id} value={value} onChange={onChange} name={name} placeholder={placeholder} disabled={disabled} />
                </div>
            );
        case FIELD_TYPES.CHECKBOX:
            return (
                <div className="input-remember">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='checkbox' id={id} checked={checked} onChange={onChange} />
                </div>
            );
    }

}
export default Field

Field.propTypes = {
    label: PropTypes.string.isRequired,
    textlabel: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    checked: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    inputType: PropTypes.string
};