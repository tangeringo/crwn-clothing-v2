import { useState } from "react";
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from "../../components/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../../components/button/button.component";
import { Sign_Up_Container, H2, Buttons_Container } from './sign-in.form.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch(error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    return alert("This email doesn't exist");
                case 'auth/wrong-password':
                    return alert("You have entered the wrong password");
                default: 
                    return console.log('Error while creating the user, ', error.message)
            }
        }
    }

    return (
        <Sign_Up_Container>
            <H2>Already have an account?</H2>
            <form onSubmit={handleSubmit}>
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
                <Buttons_Container>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASS.google}> Google Sign In </Button>
                </Buttons_Container>
            </form>
        </Sign_Up_Container>
    );
}

export default SignInForm;