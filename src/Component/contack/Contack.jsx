import React from 'react'
import './contack.css'
import { useContext, useRef, useState } from "react";
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Contex';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contack = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userSubject: '',
        userEmail: '',
        message: ''
    });
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };


    function handleSubmit(e) {
        e.preventDefault();
        if (
            formData.userName.trim() !== '' &&
            formData.userSubject.trim() !== '' &&
            formData.userEmail.trim() !== '' &&
            formData.message.trim() !== ''
        ) {

            emailjs
                .sendForm(
                    'service_bjxlx4c',
                    'template_n2z4cue',
                    formRef.current,
                    'SUlpGdEMAwTQIQb32'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        toast.success('Form submitted successfully!',{
                            position: "top-center",
                            autoClose: 3000,
                        });
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    }





    return (

        <div id='c' className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            9325818497
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            Rohitrox128@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Shantinagur Nagpur Maharashtra
                        </div>
                    </div>
                </div>
                <div className="c-right">

                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>

                    <form ref={formRef} onSubmit={(e) => handleSubmit(e)} >
                        <input

                            name='userName'
                            value={formData.userName}
                            onChange={handleInputChange}

                            type='text' placeholder='Name' />
                        <input

                            name="userSubject"
                            value={formData.userSubject}
                            onChange={handleInputChange}
                            type='text' placeholder='subject' />
                        <input
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleInputChange}

                            type='text' placeholder='Email' />
                        <br />           <br />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}

                            rows="5" placeholder="Message" />
                        <button id='btn' >Submit</button>
                    </form>
                    <ToastContainer position="top-center" />
                </div>
            </div>
            <h2 id='text'>Made with 💖 by Rohit</h2>
        </div>
    )
}

export default Contack