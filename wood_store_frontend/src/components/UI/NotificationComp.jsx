import { useDispatch, useSelector } from 'react-redux'
import classes from './NotificationComp.module.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { uiActions } from '../../store/ui-slice';

export default function Notification(){

    const notifyData = useSelector(state => state.ui.notification);
    const dispatch = useDispatch();

    const typesMapper = {
        'error': 'errNotify',
        'green': 'greenNotify',
        'single': 'singleNotify'
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            dispatch(uiActions.removeNotification());
        }, 5000);

        return ()=> clearTimeout(timer)
    }, [])

    return (
        <motion.div 
            initial={{opacity:0, y: -300}} 
            animate={{opacity: 1, y: 0}} 
            transition={{delay: 0.5}} 
            className={`${classes.notification} ${classes[typesMapper[notifyData.type]]}`}
        >
            <h1>{notifyData.header}</h1>
            <p>{notifyData.message}</p>
        </motion.div>
    )
} 