import React from 'react';
import { Basebutton } from './Button.style';
import { PrimaryButton } from './Button.style';
import { SecondaryButton } from './Button.style';
import { OutlineButton } from './Button.style';

function Button({children, btnType="Primary", btnDisabled=false, ...rest}) {
    console.log(rest, btnType);

    const checkButton = () => {
        switch (btnType) {
            case 'Primary' :
                return PrimaryButton
            case 'Secondary' :
                return SecondaryButton
            case 'Outline' :
                return OutlineButton
        }
    }

    const CustomButton = checkButton();

    return (
        <>
            <CustomButton disabled={btnDisabled} {...rest}>               
                {children}
            </CustomButton>
        </>
    );
}

export default Button;