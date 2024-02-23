import React from "react";
import {Alert} from "react-bootstrap";

type ComponentLabelProps = {
    errorMessage?: string;
}

const SimpleErrror = ({ errorMessage }: ComponentLabelProps) => {
    return (
        <div className={'mt-2'}>
            {errorMessage && <Alert className={'mb-0'} key={'danger'} variant={'danger'}>{errorMessage}</Alert>}
        </div>
    );
}

export default SimpleErrror;
