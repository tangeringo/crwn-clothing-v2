import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { AuthErrorCodes, AuthError } from "firebase/auth";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { Sign_Up_Container, H2 } from './sign-up.form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) return alert('Passwords don\'t match');

        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
            
        } catch(error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS)
                return alert('Cannot create user, email already in use.');
            return console.log('Error while creating the user', error);
        }
    }

    return(
        <Sign_Up_Container>
            <H2>Don't have an account?</H2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" 
                    name="displayName" 
                    onChange={handleChange}
                    value={displayName} 
                    label="Name"
                    required
                />

                <FormInput type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={email} 
                    label="Email"
                    required
                />

                <FormInput type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={password}
                    label="Password" 
                    required
                />

                <FormInput type="password" 
                    name="confirmPassword" 
                    onChange={handleChange} 
                    value={confirmPassword} 
                    label="Confirm Password" 
                    required
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </Sign_Up_Container>
    );
}

export default SignUpForm;