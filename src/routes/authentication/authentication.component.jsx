import SignUpForm from '../sign-up.form/sign-up.form.component';
import SignInForm from '../sign-in.form/sign-in.form.component';

import { Auth_Container } from './authentication.styles';

const Authentication = () => {
    return (
        <Auth_Container>
            <SignInForm />
            <SignUpForm />
        </Auth_Container>
    );
}

export default Authentication;