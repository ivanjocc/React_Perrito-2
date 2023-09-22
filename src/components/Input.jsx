import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, type, value, setValue }) => {
    const showAlert = () => {
        if (value === '') {
            return <br />
        }
        if (type === 'email' && !value.includes('@')) {
            return <div className="input-error">Veuilles entrer une adresse email valide.</div>
        }
        if (type === 'password' && value.length < 10) {
            return <div className="input-error">Votre mot de pass doit contenir minimum 6 caracteres</div>
        }
        return <div className='input-success'>Merci ! vous pouvez continuer</div>
    }
    return (
        <div>
            <input
                placeholder={placeholder}//placeholder={props.placeholder}
                type={type}
                className='input-form'
                value={value}
                onChange={setValue}
            />
            {showAlert()}
        </div>

    )
}


Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func

}
Input.defaultProps = {
    type: 'text',
    placeholder: 'Votre text'
}

export default Input