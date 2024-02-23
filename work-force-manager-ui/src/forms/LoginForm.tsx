import React, {useState} from "react";
import {useForm} from "react-hook-form";
import SimpleInput from "../components/SimpleInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import {LOGIN_URL} from "../utils/paths";
import SimpleError from "../components/SimpleError";
import errorMessageHandler from "../utils/errorMessageHandler";

const LoginForm = () => {
    const { handleSubmit, register} = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(
                LOGIN_URL,
                values,
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true,
                }
            );

            const token = response?.data || {};
            localStorage.setItem('token', token);

        } catch (err) {
            setErrorMessage(errorMessageHandler(err));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleInput
                label={'Email:'}
                name={'email'}
                placeholder={'email@email.com'}
                type={'email'}
                register={register}
                required={'Please enter your email'}
            />
            <SimpleInput
                label={'Password:'}
                name={'password'}
                placeholder={'password'}
                type={'password'}
                register={register}
                required={'Please enter your password'}
            />
            <SubmitButton text={'Sign In'}/>
            <SimpleError errorMessage={errorMessage}/>
        </form>
    )
};

export default LoginForm;
