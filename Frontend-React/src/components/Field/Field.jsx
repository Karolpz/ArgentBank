import React from 'react'
import PropTypes from "prop-types";

export const FIELD_TYPES = {
    TEXT: 1,
    PASSWORD: 2,
    CHECKBOX: 3
}

const Field = ({ label, textlabel, type, id, value, onChange, name, checked, placeholder, disabled }) => {
    switch (type) {
        case FIELD_TYPES.TEXT:
            return (
                <div className="input-wrapper">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='text' id={id} value={value} onChange={onChange} name={name} placeholder={placeholder} disabled={disabled} />
                </div>
            );
        case FIELD_TYPES.PASSWORD:
            return (
                <div className="input-wrapper">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='password' id={id} value={value} onChange={onChange} name={name} placeholder={placeholder} disabled={disabled} />
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
    type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
    id: PropTypes.string.isRequired,
    value: PropTypes.string
}