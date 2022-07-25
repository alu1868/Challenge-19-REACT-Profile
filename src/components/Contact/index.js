import React, { useState } from "react";
import validateEmail from "../../utils/email-validate"

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        // Get the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state to equal the inputValue (target.value)
        if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Check to see if the name is empty or the email is invalid. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('error -  name or email is invalid');
            return;
        } else {
            console.log(name, email, message);
            alert('Your message was submitted successfully! Thank you!');
        }
        // If successful, clear the inputs
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section id="contact-info" className="contact-me">
            <div className="contact">
                <p className="section-title">Shoot me an email at:  <a href="mailto:alu1868@gmail.com">alu1868@gmail.com</a></p>
            </div>
            <form className="contact-form">
                <div>
                    <label htmlFor="name">Name:    </label>
                    <input type="text" name="name" value={name} onChange={handleInputChange} />
                </div> <div>
                    <label htmlFor="email">E-mail:    </label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="name" value={message} onChange={handleInputChange}/>
                </div>
                <button type="submit" onClick={handleFormSubmit} onChange={handleInputChange}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    );
}

export default Contact