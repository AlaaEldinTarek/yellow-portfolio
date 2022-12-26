import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_buix8ma",
        "template_5ai08p7",
        form.current,
        "PldT57KPWjTf_wKSj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get In Touch</span>
          <span>Contact Me</span>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Your Name"
          />
          
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="send" className="button" />
          <span>{done && "Thanks For Contactin Me 🥰"}</span>
        </form>
        <div
          className="blur t-blur11"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
