import React , { useState } from "react";

export default function MyFormLogin() {
    const [formState , setFormState] = useState ( {} )
    const MESSAGE_ERROR = {
        email: "Email error" ,
        password: "Password error"
    };
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };
    const handleChange = (event) => {
        let error = REGEX[event.target.name].test ( event.target.value )
            ? ""
            : MESSAGE_ERROR[event.target.name];
        setFormState ( {
            ...formState ,
            [event.target.name]: {value: event.target.value , error: error}
        } );
    }
    const handleSubmit = (event) => {
        const isFilled =
            formState.email &&
            formState.email.value &&
            formState.password &&
            formState.password.value;
        const isError =
            isFilled &&
            (formState.email.error || formState.password.error);

        alert (
            isFilled && !isError
                ? "Sign in successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div
                    className={`custom-input ${formState.email &&
                    formState.email.error &&
                    "custom-input-error"}`}
                >
                    <label>Email </label>
                    <input
                        name="email"
                        value={(formState.email && formState.email.value) || ""}
                        onChange={handleChange}
                    />
                    {formState.email && formState.email.error && (
                        <p className="error">Email error</p>
                    )}
                </div>
                <div
                    className={`custom-input ${formState.password &&
                    formState.password.error &&
                    "custom-input-error"}`}
                >
                    <label>Password </label>
                    <input
                        type="password"
                        name="password"
                        value={(formState.password && formState.password.value) || ""}
                        onChange={handleChange}
                    />
                    {formState.password && formState.password.error && (
                        <p className="error">Password error</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}