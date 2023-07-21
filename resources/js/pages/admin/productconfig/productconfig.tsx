import React, { useEffect, useState } from 'react'
import { router } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import "./productconfig.scss";

export default function Productconfig({ products }: any) {

    useEffect(() => {
        console.log(products)
    }, [])
    // ✨ form logic
    // const [values, setValues] = useState<any>({
    //     name: "",
    //     description: "",
    //     price: "",
    //     image: null,
    //     // add more value here
    // })
    const { data, setData, post, progress } = useForm({
        name: "",
        description: "",
        price: "",
        image: "",
    })
    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setData((data: any) => ({
            ...data,
            [key]: value,
        }))
    }



    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(data)
        router.post('/productconfig', data, {
            forceFormData: true,
        })
    }

    return (
        <div id='productconfig'>
            This is Product
            <form id='input-card' action="">
                <input onChange={(event: any) => setData('name', event.target.value)} value={data.name} placeholder='name' type="text" name="name" id="name" />
                <input onChange={handleChange} value={data.description} placeholder='description' type="text" name="description" id="description" />
                <input onChange={handleChange} value={data.price} placeholder='price' type="number" name="price" id="price" />
                <input onChange={(event: any) => setData('image', event.target.files[0])} placeholder='image' type="file" name="image" id="image" />
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
            <div id="container-card">
                {
                    products.map((product: any) => {
                        return (
                            <div className='product-card border-black' key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <img src={product.image} alt="gagal di load" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
