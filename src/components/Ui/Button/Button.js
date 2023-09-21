import React from 'react';
import { Basebutton } from './Button.style';

function Button({children, ...rest}) {
    console.log(rest);

    // const type = () => {
    //     switch (btnType) {
    //         case 'Primary' :
    //             return PrimaryButton
    //         case 'Secondary' :
    //             return SecondaryButton
    //         case 'Outline' :
    //             return OutlineButton
    //     }
    // }

    // let costumButton = type();

    return (
        <>
            <Basebutton {...rest}>               
                {children}
            </Basebutton>
        </>
    );
}

export default Button;