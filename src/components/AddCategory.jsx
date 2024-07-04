import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if( inputValue.trim().length <=1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        // Se agrega aria-label para que testing-library encuentre el form
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}