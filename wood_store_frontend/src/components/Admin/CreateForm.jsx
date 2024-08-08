import { useState } from 'react';
import classes from './CreateForm.module.css'
import CreateInput from './CreateInput'


export default function CreateForm(){

    const [ errors, setErrors ] = useState(
        {
            'firstName': [],
            'lastName': [],
            'email': [],
            'address': [],
            'phone': [],
        }
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        
        // const errors = checkFormInput(data);

        // setErrors(errors);

        // if(!hasErrors(errors)){
        //     onFormSubmit(data);
        // }
    }

    return (
        <div className={classes.createForm}>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit} action="submit">
                <CreateInput defaultValue={''} placeHolder={'Table...'} label={'Name'} inputId={'name'} errText={''} />
                <CreateInput defaultValue={''} placeHolder={'Round brown table...'} label={'Description'} inputId={'description'} errText={''} element={'textarea'} />
                <CreateInput defaultValue={''} placeHolder={'100.00'} label={'Price'} inputId={'price'} errText={''}/>
                <CreateInput defaultValue={''} placeHolder={'100CM'} label={'Width'} inputId={'width'} errText={''} />
                <CreateInput defaultValue={''} placeHolder={'100CM'} label={'Height'} inputId={'height'} errText={''} />
                <CreateInput defaultValue={''} placeHolder={'10'} label={'Quantity'} inputId={'quantity'} errText={''} />
                <CreateInput defaultValue={''} placeHolder={'https://imageExample/jpg/01/68/75/28/360_F_168752838_bnYjDo.jpg'} label={'Main Image'} inputId={'imageUrl'} errText={''} />
                <CreateInput defaultValue={''} placeHolder={'https://imageExample/jpg/01/68/75/28/360_F_168752838_bnYjDo.jpg'} label={'Additional Image'} inputId={'imageUrl'} errText={''} />
                {/* TODO: Add Material and category inputs */}

                <div className={classes.inputOrder}>
                    <label htmlFor='material'>Select Material</label>
                    <select name="material" id="material">
                        <option value="BEECH">Beech</option>
                        <option value="WALNUT">Walnut</option>
                        <option value="OAK">Oak</option>
                    </select>
                </div>

                <div className={classes.inputOrder}>
                    <label htmlFor='category'>Select Category</label>
                    <select name="category" id="category">
                        <option value="INTERIOR">Interiror</option>
                        <option value="EXTERIOR">Exterior</option>
                    </select>
                </div>

                <button style={{marginTop: '6rem'}} className='defaultBtn'>Submit</button>
            </form>
        </div>
    )
}