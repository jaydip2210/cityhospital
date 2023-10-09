import React from 'react';
import { Baseinput, InputError } from './Input.style';

function Input({ errorText, ...rest }) {
    return (
        <>
            <Baseinput {...rest} />
            <InputError errorText={errorText}>
                {errorText}
            </InputError>
        </>
    );
}

export default Input;