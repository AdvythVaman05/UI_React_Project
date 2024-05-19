import React, { useEffect } from 'react';
import '../styles/Register.css';

const RegisterPage = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll('.form-box input');

        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.borderColor = '#007bff'; // Change border color on focus
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.style.borderColor = ''; // Reset border color if empty
                }
            });
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const phoneNumberInput = document.querySelector('[name="phone"]');
        const passwordInput = document.querySelector('#password');
        const confirmPasswordInput = document.querySelector('#confirmPassword');

        if (!/^(\d{10})$/.test(phoneNumberInput.value)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords don't match.");
            return false;
        }

        alert("Form submitted successfully!");
        console.log("Form data:", {
            email: phoneNumberInput.value,
            phone: phoneNumberInput.value,
            password: passwordInput.value,
            confirmPassword: confirmPasswordInput.value,
        });
    };

    return (
        <div className="register-container">
            <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" pattern="\d{10}" title="Enter a 10 digit phone number" placeholder="Phone Number" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
                    </div>
                    
                    <button type="submit" class="btn">Register</button>
                </form>
                <p>Already a user? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;
