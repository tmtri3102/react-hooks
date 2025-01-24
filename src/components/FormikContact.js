import { Formik } from "formik";
import React , { useState } from "react";

export default function FormikContact() {
    const [form , setForm] = useState ( {} )
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
    };
    const handleChange = (e) => {
        setForm ( {
            ...form ,
            [e.target.name]: e.target.value
        } )
    }
    const handleValidate = (e) => {
        const errors = {};
        if (!form.name) {
            errors.name = "Name Required";
        }

        if (!form.email) {
            errors.email = "Email Required";
        } else if (!REGEX.email.test ( form.email )) {
            errors.email = "Invalid email address";
        }

        if (!form.phone) {
            errors.phone = "Phone Required";
        }

        if (!form.message) {
            errors.message = "Message Required";
        }
        return errors;
    }
    const handleSubmit = (e) => {
        alert ( "Submitted" )
    }

    return (
        <>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({errors , handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name={"name"} onChange={handleChange} value={form.name || ""}
                               placeholder="Name"/>
                        <p className="error">{errors.name}</p>

                        <input type="email" name={"email"} onChange={handleChange} value={form.email || ""}
                               placeholder="Email"/>
                        <p className="error">{errors.email}</p>

                        <input type="number" name={"phone"} onChange={handleChange} value={form.phone || ""}
                               placeholder="Phone"/>
                        <p className="error">{errors.phone}</p>

                        <input type="text" name={"message"} onChange={handleChange} value={form.message || ""}
                               placeholder="Message"/>
                        <p className="error">{errors.message}</p>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    )
}