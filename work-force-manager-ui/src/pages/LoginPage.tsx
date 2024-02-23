import LoginForm from "../forms/LoginForm";
import {Image} from "react-bootstrap";
import React from "react";

const LoginPage = () => {
    return (
        <div className={'rounded bg-light d-flex flex-column align-items-center justify-content-center p-4'}>
            <Image src={require('../images/logo.png')} alt='Logo' />
            <LoginForm />
        </div>
    );
}

export default LoginPage;