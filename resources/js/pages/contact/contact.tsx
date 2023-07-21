import React, { useState } from 'react'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import "./contact.scss"
import { router } from "@inertiajs/react";
import Header from '@/components/general/header/header';

export default function Contact({ name }: any) {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        router.post('/test', values)
    }

    return (
        <div id='Contact'>
            <Header
                page='Contact Us'
                title={"We'd love to hear from you"}
                description="Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details."
            />
            <div id="content">
                <form id='form' onSubmit={handleSubmit}>
                    {/* id harus sesuai dengan nama key dari item yang akan di submit */}
                    <div id='top'>
                        <div className='input_wrapper'>
                            <label htmlFor="title">First Name</label>
                            <br />
                            <input id="firstName" className='input' value={values.firstName} onChange={handleChange} />
                        </div>
                        <br />
                        <div className='input_wrapper'>
                            <label htmlFor="title">Last Name</label>
                            <br />
                            <input id="lastName" className='input' value={values.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="input_wrapper">
                        <label htmlFor="title">Email</label>
                        <br />
                        <input id="email" className='input' value={values.email} onChange={handleChange} />
                    </div>
                    <br />
                    <div className="input_wrapper">
                        <label htmlFor="content">Message</label>
                        <br />
                        <textarea placeholder='Type your Message' id="message" value={values.message} onChange={handleChange} />
                    </div>
                    <br />
                    <button type="submit" id='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    )
}

Contact.layout = (page: any) => <AppLayout children={page} />;