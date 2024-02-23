import React from "react";
import {FieldValues, UseFormRegister} from "react-hook-form";

type SimpleInputProps = {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
    required?: string;
}

const SimpleInput = ({ name, type, label, placeholder, register, required }: SimpleInputProps) => {
    return (
        <div className={'form-group mb-2'}>
            <label className={'form-label'}>{label}</label>
            <input
                type={type}
                className={'form-control'}
                placeholder={placeholder}
                {...register(name, {required: required})}
            />
        </div>
    );
}

export default SimpleInput;
