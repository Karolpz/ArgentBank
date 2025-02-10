import React from 'react'

export const FIELD_TYPES = {
    TEXT: 1,
    PASSWORD: 2,
    CHECKBOX: 3
}

const Field = ({ label, textlabel, type, id }) => {
    switch (type) {
        case FIELD_TYPES.TEXT:
            return (
                <div className="input-wrapper">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='text' id={id} />
                </div>
            );
        case FIELD_TYPES.PASSWORD:
            return (
                <div className="input-wrapper">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='password' id={id} />
                </div>
            );
        case FIELD_TYPES.CHECKBOX:
            return (
                <div className="input-remember">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type='checkbox' id={id} />
                </div>
            );
    }

}
export default Field