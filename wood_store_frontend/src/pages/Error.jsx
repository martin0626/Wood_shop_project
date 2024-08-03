import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNav/MainNavigation";
import ErrorContainer from "../components/UI/ErrorSection";


const ERROR_MESSAGES = {
    404: {
        title: 'Not found!',
        message: 'Page not found...'
    },
    500: {
        title: 'Server Error!',
        message: 'Please try again later.'
    }
}


export default function ErrorPage(){

    const error = useRouteError();

    let title = 'An error occurred!';
    let  message = 'Something went wrong!';

    if(Object.keys(ERROR_MESSAGES).includes(String(error.status))){
        title = ERROR_MESSAGES[error.status].title;
        message = ERROR_MESSAGES[error.status].message;
    };

    //TODO: Finish this page and make it dinamic
    //https://github.com/academind/react-complete-guide-course-resources/blob/main/code/21%20Routing/32-finished/frontend/src/pages/Error.js
    return (
        <>
            <MainNavigation/>
            <ErrorContainer title={title} message={message} />
        </>
    )
}