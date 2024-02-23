import {AxiosError} from "axios";

const errorMessageHandler = (err?: any ) => {

    if (err?.isAxiosError) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
            const status = axiosError.response.status;

            if (status === 400) {
                return 'Missing email or password';
            } else if (status === 403) {
                return 'Unauthorized' ;
            } else if (status > 400 && status < 500) {
                return 'Bad request' ;
            } else if (status >= 500 && status < 600) {
                return 'Internal server error' ;
            } else {
                return 'Unexpected error occurred' ;
            }
        }
    }

    return '';
};

export default errorMessageHandler;
