import React, { useState } from "react";

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        // Get the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state to equal the inputValue (target.value)
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
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
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        
    )
}

export default Contact