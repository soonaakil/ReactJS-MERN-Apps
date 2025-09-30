import React, { useState } from 'react';

const Form = () => {
    // State for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Clear the form fields after submission
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <h1>Form Handling in React</h1>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Corrected state update
                    placeholder="Enter your name"
                />
                <br />

                {/* Email */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Corrected state update
                    placeholder="Enter your email"
                />
                <br />

                {/* Password */}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Corrected state update
                    placeholder="Enter your password"
                />
                <br />

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
            <br /><br />
            <h2>Your Input:</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </>
    );
}

export default Form;
