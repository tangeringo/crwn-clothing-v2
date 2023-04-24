import { FC, ButtonHTMLAttributes } from 'react';

import { 
    Base_Button_Styles, 
    Google_Btn_Styles, 
    Inverted_Btn_styles, 
    ButtonSpinner 
} from './button.styles';

export enum BUTTON_TYPE_CLASS {
    base = 'base-sign-in',
    google = 'google-sign-in',
    inverted = 'inverted-sign-in',
}

const getButtonStyles = (buttonType = BUTTON_TYPE_CLASS.base): typeof Base_Button_Styles => 
    ({
        [BUTTON_TYPE_CLASS.base]: Base_Button_Styles,
        [BUTTON_TYPE_CLASS.google]: Google_Btn_Styles,
        [BUTTON_TYPE_CLASS.inverted]: Inverted_Btn_styles,
    }[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASS;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButtonStyles(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading? <ButtonSpinner /> : children}
        </CustomButton>
    );
};

export default Button;