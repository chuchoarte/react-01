import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar que no este nacío
        if(inputValue.trim().length > 2) {
            //console.log('Submit Enviado');
            setCategories(category => [inputValue, ...category]);
            //Vaciar el input
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

