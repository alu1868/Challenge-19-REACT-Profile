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
        <div>
            <div>
                {/* Contact me message */}
                <div>
                    <p>Feel free to reach out to me at: alu1868@gmail.com</p>
                </div>

                {/* contact form */}
                <form>
                    {/* Input Name */}
                    <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    className="input"
                    />

                    {/* input Sender Email */}
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    className="input"
                    />

                    {/* Input Message */}
                    <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                    className="input textarea"
                    />

                    <button type="submit" name="submit-button" onClick={handleFormSubmit}>
                        SEND
                    </button>
                </form>
                
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Contact