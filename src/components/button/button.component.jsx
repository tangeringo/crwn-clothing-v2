import { Base_Button_Styles, Google_Btn_Styles, Inverted_Btn_styles } from './button.styles.js';

export const BUTTON_TYPE_CLASS = {
    base: 'base-sign-in',
    google: 'google-sign-in',
    inverted: 'inverted-sign-in',
}

const getButtonStyles = (buttonType = BUTTON_TYPE_CLASS.base) => 
    ({
        [BUTTON_TYPE_CLASS.base]: Base_Button_Styles,
        [BUTTON_TYPE_CLASS.google]: Google_Btn_Styles,
        [BUTTON_TYPE_CLASS.inverted]: Inverted_Btn_styles,
    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButtonStyles(buttonType);
    return <CustomButton {...otherProps}> {children} </CustomButton>
};

export default Button;