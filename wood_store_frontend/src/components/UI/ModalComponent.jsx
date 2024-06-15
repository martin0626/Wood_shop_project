import classes from "./ModalComponent.module.css"
import { motion } from 'framer-motion'
import { useRef } from "react";
import { createPortal } from 'react-dom'

export default function ModalComponent({children, onClose}){
    const dialog = useRef();


    return createPortal(
        <>
          <div className={classes.backdrop} onClick={onClose} />
          <motion.dialog
            disableAutoFocus={true}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            open
            className={classes.modal}
          >
           
            {children}
          </motion.dialog>
        </>,
        document.getElementById('modal')
      );
        
    
};