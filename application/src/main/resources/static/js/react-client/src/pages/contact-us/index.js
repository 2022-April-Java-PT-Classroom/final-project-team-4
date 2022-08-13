import React from "react";
import emailjs from "emailjs-com";
import style from "./style.module.scss";
import phone from '../../assets/images/phone.jpg';

const ContactPage = () => {
   
    const post = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_7t8gegw", "template_efxnhoi", e.target, "XGpCd75LuoPDxCnTt")
        // emailjs.sendForm("service_7t8gegw","template_efxnhoi","XGpCd75LuoPDxCnTt")
        
        alert("Hello" + " " + " Guest," +"\nYour messeege is succesufully send.\nCheck your email for futher information. ");
    
        e.target.reset();
      };
    

    return (
      <div className={style.contactPage}>
        <div>
        <img src={phone} className={style.heroImage}></img>
        <div className={style.centered}>Contact Us</div>
      </div>
      <p>
        Please contact us by filling out the form below and we will respond to you within the next business day.
      </p>
      <div className={style.contact}>
         <form onSubmit={post}>
            <input type="text" placeholder="  Name" id="name" name="name" autoComplete="on"/><br />
            <input type="email" placeholder="  Email" id="email" name="email"autoComplete="on"/><br />
            <input type="text" placeholder="  Subject" id="subject" name="subject"autoComplete="on"/><br />
            <textarea type="text" placeholder=" Type Your Message Here" id="message" cols="100" rows="20" name="message"></textarea><br />

            <button className={style.send}>Send</button>

         </form>
         </div>
       </div>
    )

}
export default ContactPage;