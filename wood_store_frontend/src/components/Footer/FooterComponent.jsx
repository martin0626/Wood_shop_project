import classes from './FooterComponent.module.css'
import FooterContacts from './FooterContacts'
import FooterNav from './FooterMap'
import Subscribe from './FooterSubscribe'


export default function FooterComp(){
    return (
        <div className={classes.footerContainer}>
            <FooterContacts/>
            <FooterNav/>
            <Subscribe/>
        </div>
    )
}