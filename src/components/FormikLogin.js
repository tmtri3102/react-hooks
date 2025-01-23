import React , { Component , useState } from 'react';
import { Formik } from 'formik';

export default function FormikLogin() {
    const [formState , setFormState] = useState ( {} );
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
    };
    const handleChange = (e) => {
        setFormState ( {
            ...formState ,
            [e.target.name]: e.target.value
        } )
    }
    const handleValidate = (e) => {
        const errors = {};
        if (!formState.email) {
            errors.email = "Email Required";
        } else if (!REGEX.email.test ( formState.email )) {
            errors.email = "Invalid email address";
        }
        if (!formState.password) {
            errors.password = "Password Required";
        }
        return errors;

    }

    const handleSubmit = (e) => {
        alert ( "Submitted" )
    }

    return (
        <Formik
            initialValues={formState}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({errors , handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <input type="email" name={"email"} onChange={handleChange} value={formState.email || ""}
                           placeholder="Email"/>
                    <input type="password" name={"password"} onChange={handleChange} value={formState.password}
                           placeholder="Password"/>
                    <button type="submit">Submit</button>
                    <p className="error">{errors.email}</p>
                    <p className="error">{errors.password}</p>
                </form>
            )}
        </Formik>
    )
}