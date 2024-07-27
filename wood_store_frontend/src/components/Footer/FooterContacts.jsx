import classes from './FooterContacts.module.css'


export default function FooterContacts(){
    return (
            <div className={classes.footerContact}>
                <h1>Contact Us</h1>
                <div className={classes.contactSingle}>
                    <img src="https://www.transparentpng.com/thumb/facebook-logo/facebook-icon-transparent-background-20.png" alt="facebook" />
                    <p>Wood Shop</p>
                </div> 
                <div className={classes.contactSingle}>
                    <img src="https://lh6.googleusercontent.com/proxy/wSPFD-rcv3H_Ztj-ta42eWzv2q8L7EdkBr8vsPwUjc4SxQN9HsDkMH7VrJfWCveqkEaSgFFuxbhU85fBW_l97vESFZ-EILB1TWPPs4b4YqNF7Po39dSy5EOHsLSFC76MLC81XCdxofRUC88Kq9-oZp5lI8XZKT2N_QX1hg" alt="instagram" />
                    <p>Wood.Shop_instagram</p>
                </div> 
                <div className={classes.contactSingle}>
                <span style={{fontSize: '16px'}} class="material-symbols-outlined">
                call
                    </span>
                    <p>08854632XX</p>
                </div> 
            </div> 
    )
}