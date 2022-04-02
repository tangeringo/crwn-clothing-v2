import { Form_Input_Label, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
            <Form_Input_Label shrink={otherProps.value.length}>
                {label}
            </Form_Input_Label>
            )}
        </Group>
    )
}

export default FormInput;