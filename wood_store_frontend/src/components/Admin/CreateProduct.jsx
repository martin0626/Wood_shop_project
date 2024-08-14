import { useState } from 'react'
import classes from './CreateProduct.module.css'
import CreateForm from './CreateForm';
import ModalComponent from '../UI/ModalComponent';
import { logout } from '../../utils/authorization';
import { useNavigate } from 'react-router';

export default function CreateProdContent(){
    const [isOpenForm, setIsOpenForm] = useState(false);
    const navigate = useNavigate();

    const handleOpen = ()=>{
        setIsOpenForm(true);
    }

    const handleLogOut = ()=>{
        logout();
        navigate('/adminAuth')
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
                <div className={classes.controlBtns}>
                    <button onClick={handleOpen} className="defaultBtn">ADD NEW</button>
                    <button onClick={handleLogOut} className="defaultBtn">Logout</button>
                </div>
            }
        </div>
    )
}