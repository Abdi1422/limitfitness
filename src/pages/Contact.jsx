import "./contact.scss"
import img3 from '../images/contact.png'
import { Button } from "@mui/material"
import Footer from "../components/footer"

const styles={
    backgroundColor:'black',
    color:'white',
    transition: "500ms all ",
    fontSize:"30px",
    "&:hover":{
      color:'black'
    }
  }

const Contact =()=>{
    return(
        <>
            <section className="contactsec">
                <div className="imgdiv2" >
                    <img src={img3} className="contactimg" />
                    <h1 className="contact" >Contact Us</h1>
                </div>
                <div>
                    <ul className="ul">
                        <li>We’ve answered our most common queries in the FAQs. This is the fastest and easiest way to resolve most of your queries.</li>
                        <li>If you have a query regarding a payment, or wish to change your billing date, you can call us on 020 7537 1028. Please note, this phone number is for the billing team only, and they will only be able to assist with queries related to member payments.</li>
                        <li>All other enquiries, are best handled by our Member Service Team who can be contacted via the contact form below, or via the Live Chat button in the bottom right hand corner of this page. Alternatively, you can contact us via Limitfitness@gmail.com</li>
                        <li>Do note, that a ticket will be created once you have contacted us via email or the contact form, so please only use one of these channels. A member of our team will be in touch with you as soon as possible, but please allow 3-5 working days.</li>
                    </ul>
                </div>
                <div className="infodivs">
                    <div className="infodiv">
                       <button className="iconbtn"><ion-icon name="location-sharp"></ion-icon></button>
                       <p className="contactinfo">45 London 8-10 E Ferry Rd/ E14 3BB</p>
                    </div>
                    <div className="infodiv">
                       <button className="iconbtn"><ion-icon name="phone-portrait-sharp"></ion-icon></button>
                       <p className="contactinfo">Limitfitness@gmail.com</p>
                    </div>
                    <div className="infodiv">
                        <button className="iconbtn"><ion-icon name="mail-sharp"></ion-icon></button>
                        <p className="contactinfo">020 7537 1028</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Contact;