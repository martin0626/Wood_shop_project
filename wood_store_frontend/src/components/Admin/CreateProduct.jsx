import { useState } from 'react'
import classes from './CreateProduct.module.css'
import CreateForm from './CreateForm';
import ModalComponent from '../UI/ModalComponent';

export default function CreateProdContent(){
    const [isOpenForm, setIsOpenForm] = useState(false);

    const handleOpen = ()=>{
        setIsOpenForm(true);
    }

    const handleClose = ()=>{
        setIsOpenForm(false);
    }

    return (
        <div className={classes.addSection}>
            {isOpenForm
            ?
                <ModalComponent onClose={handleClose}>
                    <CreateForm/>
                </ModalComponent>
            :
                <button onClick={handleOpen} className="defaultBtn">ADD NEW</button>
            }
        </div>
    )
}