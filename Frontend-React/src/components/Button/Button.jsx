import React from 'react'
import PropTypes from "prop-types"

export const BUTTON_TYPES = {
    DEFAULT: 1,
    SUBMIT: 2,
};

const Button = ({ type, onClick, title, text }) => {
    switch (type) {
        case BUTTON_TYPES.DEFAULT:
            return (
                <button
                    type='button'
                    className='button button-default'
                    onClick={onClick}
                    title={title}>
                    {text}
                </button>
            );
        case BUTTON_TYPES.SUBMIT:
            return (
                <input
                    type='submit'
                    value={text}
                    className='button button-submit'
                    onClick={onClick}
                    title={title}
                />
            )
    }
}

export default Button

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
    onClick: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired
}