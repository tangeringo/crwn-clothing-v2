import { useState } from "react";
import { 
    createAuthUserWithEmailAndPassword, createUserDocFromAuth
} from '../../utils/firebase/firebase.utils';

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
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) return alert('Passwords don\'t match');

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user, {displayName});
            resetFormFields();
            
        } catch(error) {
            if (error.code('auth/email-already-in-use')) {
                alert('This email is already in use')
            } else {
                console.log('Error while creating the user', error.message);
            }
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