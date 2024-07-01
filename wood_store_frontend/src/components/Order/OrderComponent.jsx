import classes from './OrderComponent.module.css'


export default function Order(){
    return(
        <div className={classes.orderContainer}>
            <div className={classes.headerOrder}>
                <h1>Order</h1>
                <h3>Please add your personal information to finish order.</h3>
            </div>
            <form className={classes.orderForm}>
                <div className={classes.inputOrder}>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className={classes.inputOrder}>
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                
                <div className={classes.inputOrder}>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={classes.inputOrder}>
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" required/>
                </div>
                <div className={classes.btnOrder}>
                    <button className='defaultBtn'>Finish</button>
                </div>
            </form>
            

        </div>
    )
}