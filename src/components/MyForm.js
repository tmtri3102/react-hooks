import React, { useState } from "react";

export default function Submit() {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
    });
    // File
    const [selectedFile, setSelectedFile] = useState();

    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            // If it's a file input
            setSelectedFile(files[0]);
            setIsFilePicked(true);
        } else {
            // if (name === "email") {
            //     if (!Number(value)) {
            //         alert("Your email must be a number");
            //     }
            // }
            // If it's a text input
            setState({ ...state, [name]: value });
        }


    }

    const submitHandler = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log("Form submitted with state:", state);
        if(!Number(state.email)){
            alert("Your email should be a number");
        }
        if (selectedFile) {
            console.log("Selected file:", selectedFile);
        }
    }
    return (
        <form onSubmit={submitHandler} style={{display: "flex", flexDirection: "column", maxWidth: 400, gap: 16}}>
            <h1>{state.name}</h1>
            <input type="text" onChange={handleChange} name={"name"} placeholder="Name"/>
            <input type="text" onChange={handleChange} name={"email"} placeholder="Email"/>
            <input type="text" onChange={handleChange} name={"password"} placeholder="Password"/>
            <input type="file" name="file" onChange={handleChange}/>
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <input type="submit"/>
        </form>
    )
}