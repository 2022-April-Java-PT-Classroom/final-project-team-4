import React from "react";
import emailjs from "emailjs-com";
import style from "./style.module.scss";


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
       
        <form onSubmit={post}>
            <input type="text" placeholder="Name" id="name" name="name" autoComplete="on"/>
            <input type="email" placeholder="Email" id="email" name="email"autoComplete="on"/>
            <input type="text" placeholder="Subject" id="subject" name="subject"autoComplete="on"/>
            <textarea type="text" placeholder="Type Your Message Here" id="message" cols="40" rows="20" name="message"></textarea>

            <button id="send">Send</button>

        </form>
       </div>
    )

}
export default ContactPage;