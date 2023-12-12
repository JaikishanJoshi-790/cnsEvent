import React,{useRef,useState} from 'react'
import './contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [ waitmessage , setWaitMessage ] = useState()

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
          await emailjs.sendForm(
            "service_dt1jphw",
            "template_qnslbnb",
            form.current,
            "pZFzX-F2rhKdUleKx"
          );
          handleMessages(true);
        } catch (error) {
          handleMessages(false);
        }
      };
      
  const handleMessages = (isSuccess) => {
    if (isSuccess) {
      setWaitMessage(false);
      setSuccess(true);
      form.current.reset();
    } else {
      setWaitMessage(false);
      setError(true);
    }

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };
  const onclickwait = () => {
    return setWaitMessage("wait - it take time because it's free")
  }
  return (
    <div className='contact'>

        <div className="contact-text">
            <h1>Contact us <hr /></h1>
            <p>If you would like to contact us for a catering or banquet, kindly fill out the form below and we will have someone from our team reach out to you.
                </p>
            </div>
        <div className='contact-container'>
            <div className="contact-address">
                <h2><IoIosContact/>Anil Sharma</h2>
                <h2><FaSquarePhone />900159350067</h2>
                <h2><FaRegAddressBook/>सरस डेयरी, चुंगी चौकी, डीडवाना (341303)</h2>
                <h2><IoLocationSharp/>Location on Map</h2>
            </div>
            <form className="contact-form" onSubmit={sendEmail}
            ref={form}>
                <input required type="text" placeholder='Full Name' name="name" />
                <input required type="text" placeholder='Event Date' name="event date" />
                <input required type="tel" placeholder='Mobile Number' name="mobile number" />
                <input required type="number" placeholder='Number of Guests' name="number of guests"/>
                <textarea name="" placeholder='Your event description' cols="30" rows="5"></textarea>
                <button onClick={onclickwait} className='btn' type='submit'>Submit</button>
                <p>{waitmessage}</p>
            {error && "Error"}
            {success && "Success"}
            </form>
        </div>
      
    </div>
  )
}

export default Contact
