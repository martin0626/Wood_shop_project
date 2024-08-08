import classes from './SingleEditablePr.module.css'

export default function SingleEditablePr({onChoose, id, children}){
    return (
        <div className={classes.prCnt}>
            <div className={classes.content}>
                {children}
            </div>
            <div className={classes.actionPr}>
                <button onClick={()=>onChoose(id)} className="defaultBtn">Edit</button>
            </div>
        </div>
    )
}