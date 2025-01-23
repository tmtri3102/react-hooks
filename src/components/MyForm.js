import React, { useState } from "react";
export default function MyForm() {
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? 'Signin successful!' : 'Fill all fields please!');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} value={form.username || ''} placeholder="Username" />
            <input type="text" name="email" onChange={handleChange} value={form.email || ''} placeholder="Email" />
            <input type="text" name="password" onChange={handleChange} value={form.password || ''} placeholder="Password" />
            <input type="text" name="confirmPassword" onChange={handleChange} value={form.confirmPassword || ''} placeholder="Confirm Password" />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    )
}