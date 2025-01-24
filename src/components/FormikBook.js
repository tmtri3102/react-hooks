import React , { useState } from 'react';
import { Formik } from "formik";

export default function FormikBook() {
    const [book , setBook] = useState ( [] );
    const [form , setForm] = useState ( {} )
    const [indexSelected , setIndexSelected] = useState ( -1 );
    const handleChange = (e) => {
        setForm ( {...form , [e.target.name]: e.target.value} );
    }
    const handleValidate = (e) => {
        const errors = {};
        if (!e.title) {
            errors.title = 'Title is required';
        }
        if (!e.quantity) {
            errors.quantity = 'Quantity is required';
        }
        return errors;
    }

    const handleSelect = (book , indexSelected) => {
        setForm ( book );
        setIndexSelected ( indexSelected );
    }

    const handleDelete = (e) => {
        const newBooks = JSON.parse ( JSON.stringify ( book ) );
        newBooks.splice ( indexSelected , 1 );
        setBook ( newBooks );
    }

    const handleSubmit = (e) => {
        e.preventDefault ();
        const newBooks = JSON.parse ( JSON.stringify ( book ) );
        if (indexSelected > -1) {
            newBooks.splice ( indexSelected , 1 );
        } else {
            newBooks.push ( book );
        }
        setBook ( newBooks );
        setForm ( {
            ...form ,
            book: newBooks ,
        } )
        setIndexSelected ( -1 );
    }
    return (
        <Formik
            initialValues={form}
            enableReinitialize={true} // Để form cập nhật lại khi chọn sách để chỉnh sửa
            validate={handleValidate}
            onSubmit={(values , {resetForm}) => {
                const newBooks = [...book];
                if (indexSelected > -1) {
                    newBooks[indexSelected] = values; // Cập nhật sách khi chỉnh sửa
                } else {
                    newBooks.push ( values ); // Thêm sách mới
                }
                setBook ( newBooks );
                setIndexSelected ( -1 ); // Reset indexSelected
                resetForm (); // Reset form sau khi submit
            }}
        >
            {({values , handleChange , handleSubmit , errors}) => (
                <form onSubmit={handleSubmit}>
                    <h1>Library</h1>
                    <div>
                        <label>Tiêu đề</label>
                        <input
                            type="text"
                            name="title"
                            value={values.title || ""}
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <div style={{color: "red"}}>{errors.title}</div>
                        )}
                    </div>
                    <div>
                        <label>Số lượng</label>
                        <input
                            type="number"
                            name="quantity"
                            value={values.quantity || ""}
                            onChange={handleChange}
                        />
                        {errors.quantity && (
                            <div style={{color: "red"}}>{errors.quantity}</div>
                        )}
                    </div>
                    <button type="submit">
                        {indexSelected > -1 ? "Update" : "Add"}
                    </button>

                    <table border="1" style={{marginTop: "20px" , width: "100%"}}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {book.map ( (b , index) => (
                            <tr key={index}>
                                <td>{b.title}</td>
                                <td>{b.quantity}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect ( b , index )}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newBooks = [...book];
                                            newBooks.splice ( index , 1 );
                                            setBook ( newBooks );
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ) )}
                        </tbody>
                    </table>
                </form>
            )}
        </Formik>
    )
}