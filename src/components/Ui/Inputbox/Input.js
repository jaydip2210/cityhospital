import React from 'react';
import { Baseinput } from './Input.style';

function Input({...rest}) {
    return (
        <>
           <Baseinput {...rest}/>
        </>
    );
}

export default Input;