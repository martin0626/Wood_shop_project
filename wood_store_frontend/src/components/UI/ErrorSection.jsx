import classes from './ErrorSection.module.css'

export default function ErrorContainer({title, message}){
    return (
        <>
            <div className={classes.errorContainer}>
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        </>
    )
}