import React, { useState } from 'react';

// Custom validation function
const validate = (values) => {
    // Create an object to store validation errors
    const errors = {};

    // Name validation
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 2) {
        errors.name = 'Name is too short';
    } else if (values.name.length > 50) {
        errors.name = 'Name is too long';
    }

    // Email validation
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(values.password)
    ) {
        errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    return errors;
};

// Main component for the signup form
const SignupForm = () => {
    // State to manage form values
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    // State to manage form errors
    const [errors, setErrors] = useState({});

    // State to manage form submission
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        const validationErrors = validate(values);
        setErrors(validationErrors);

        // Check if there are no errors
        if (Object.keys(validationErrors).length === 0) {
            // Start submission process
            setIsSubmitting(true);

            // Simulate an API call or form submission
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                // Reset form
                setValues({ name: '', email: '', password: '' });
                setErrors({});
                setIsSubmitting(false);
            }, 400);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl mb-6 text-center">Sign Up</h2>

            {/* Form with custom handling */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input Field */}
                <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your name"
                    />
                    {errors.name && (
                        <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                    )}
                </div>

                {/* Email Input Field */}
                <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                </div>

                {/* Password Input Field */}
                <div>
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Create a password"
                    />
                    {errors.password && (
                        <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default SignupForm;

// Key Concepts:
// 1. useState for managing form state
// 2. Custom validation function
// 3. Manual form handling without external libraries
// 4. Error display and form submission logic