import React, { useState } from 'react';

import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('') 

    const handleSearch = (e) => {
       
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]) //al usar el cats me devuelve el estado anterior (valores de categories) y le sumo el nuevo
            setInputValue('')
        }
        
    }
    
    return (
        <>
            <form name='algo' onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={ handleSearch } placeholder="Ingrese una categoría" />
            </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}