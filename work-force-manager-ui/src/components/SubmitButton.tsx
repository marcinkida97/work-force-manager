import React from "react";

type SubmitButtonProps = {
    text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
    return (
        <button type={'submit'} className={'btn btn-primary mt-2'}>{text}</button>
    );
}

export default SubmitButton;
