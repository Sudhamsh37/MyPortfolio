import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "2d1af820-705c-4637-a7da-d60a69af7d7b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                alert(data.message);
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take new projects on web development and system design</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Email icon" />
                            <p>chsudhamsh@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Phone icon" />
                            <p>9347581716</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location icon" />
                            <p>Hyderabad</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Enter your name" name="name" required />

                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" placeholder="Enter your email" name="email" required />

                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                        required
                    />
                    <button type="submit" className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
