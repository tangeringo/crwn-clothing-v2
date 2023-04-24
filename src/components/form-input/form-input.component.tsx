import { InputHTMLAttributes, FC } from 'react';

import { Form_Input_Label, Input, Group } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
            <Form_Input_Label shrink={
                    Boolean(otherProps.value && 
                    typeof otherProps.value === 'string' && 
                    otherProps.value.length)
                }>
                {label}
            </Form_Input_Label>
            )}
        </Group>
    )
}

export default FormInput;