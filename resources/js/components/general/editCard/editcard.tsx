import React, { useState, useEffect } from 'react'
import "./editcard.scss";
import { router } from "@inertiajs/react";

export default function EditCard(props: any) {
    const [edit, setEdit] = useState(false)

    // ✨ form logic
    const initial = {
        title: props.title,
        description: props.description,
    }
    const [values, setValues] = useState({
        title: props.title,
        description: props.description,
        // add more value here
    })

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        if (initial.description === values.description) {
            e.preventDefault()
        } else {
            e.preventDefault()
            router.put('/webconfig', values)
        }
    }
    return (<>
        <form id='EditCard' onSubmit={handleSubmit}>
            {/* id harus sesuai dengan nama key dari item yang akan di submit */}
            <h1>{props.alias ? props.alias : "test"}</h1>
            <br />
            <label htmlFor="content">Content:</label>
            <input id="description" defaultValue={values.description} value={values.description} onChange={handleChange} />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
    </>);
}
