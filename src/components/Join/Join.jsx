import React, { useRef, useState } from 'react'
import '../Join/Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const [formData, setFormData] = useState({});
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    //Connecting the node js server
    const handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(formData);
        const response = await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
    // Using Email JS 
    const eform = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify(eform),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        emailjs.sendForm('service_120mkys', 'template_q7xe2gh', eform.current, 'jEHKVcMHfeBQd2QUg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='join' id='join-us'>
            <div className="left-join">
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className='right-join'>
                <form /*ref={eform}*/ onSubmit={handleSubmit} className="email-input" /*onSubmit={sendEmail}*/>

                    <input
                        type="email"
                        name='useremail'
                        placeholder='enter email'
                        value={formData.email}
                        onChange={handleForm}
                    />
                    <button className='btn btn-join'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join