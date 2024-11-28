import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme/Colors';

const FormStyle = styled.form`
    display: flex;
    width: 100%;
    height: 2rem;
    margin-top: 1rem;
    background-color: ${Colors.green3};
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    background-color: ${Colors.green2};
    height: 0.5rem;
    width: 80%;
    padding: 0.8rem;
    border: none;
    border-radius: 15px;
    margin-right: 1rem;
    font-size: 1rem;
    color: ${Colors.green6};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;

    &:focus {
        background-color: ${Colors.green4};
        outline: none;
        color: #fff;
    }
`;

const Button = styled.button`
    background-color: ${Colors.green2};
    width: 20%;
    letter-spacing: 1px;
    border: none;
    border-radius: 15px;
    color: ${Colors.green5};
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${Colors.green6};
        color: #fff;
    }
`;

interface FormComponentProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    buttonText: string;
    inputWidth?: string;
    buttonWidth?: string;
}

export const FormComponent: React.FC<FormComponentProps> = ({
    onSubmit,
    value,
    onChange,
    placeholder,
    buttonText,
    inputWidth = '80%',
    buttonWidth = '20%',
}) => {
    return (
        <FormStyle onSubmit={onSubmit}>
            <Input
                style={{ width: inputWidth }}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <Button style={{ width: buttonWidth }} type="submit">
                {buttonText}
            </Button>
        </FormStyle>
    );
};
