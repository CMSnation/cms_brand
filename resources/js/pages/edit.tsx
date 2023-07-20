// ivan - 16 Juli 2023
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

// jangan lupa parameter di props di sesuaikan dengan parameter yang di kirim dari controller
export default function Test({ content }: any) {

    // default value dari form kita buat
    const [values, setValues] = useState({
        title: "",
        description: "",
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
        e.preventDefault()
        router.post('/test', values)
    }
    return (
        <div className="pt-36">
            <h1 className="w-full justify-center content-center bg-slate-300 text-center p-2">Test Banget 123</h1>
            {/* mapping content data yang kita dapatkan dari parameter content (dari controller) 👇🏻 */}
            {content.map((item: any, index: number) => {
                return <ContentCard key={index} {...item} />;
            })}
            {/* submit form */}
            <div className="fixed top-0 left-0 w-full h-fit form bg-slate-300 p-3">
                <h2 className="w-full justify-center content-center bg-slate-300 text-center p-2">
                    <b>Submit Content</b>
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* id harus sesuai dengan nama key dari item yang akan di submit */}
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input id="title" value={values.title} onChange={handleChange} />
                    <br />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea id="content" value={values.description} onChange={handleChange} />
                    <br />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}


// update modal 
const UpdateModal = (props: any) => {
    const [open, setOpen] = useState(false)

    // toogle modal
    function toogleOpen() {
        setOpen(!open)
    }

    // ⚡form logic
    const initial = {
        id: props.id,
        title: props.title,
        description: props.description,
    }
    const [values, setValues] = useState({
        id: props.id,
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
        if (initial.title === values.title && initial.description === values.description) {
            e.preventDefault()
            toogleOpen() // close modal
        } else {
            e.preventDefault()
            toogleOpen() // close modal
            router.put('/test', values)
        }
    }
    return (<>
        <div style={{ backgroundColor: "rgb(0,0,0,0.5)" }} className={`${open ? "block" : "hidden"} top-0 left-0 modal fixed m-auto h-full w-full`}>
            {/* close button */}
            <div style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                padding: "20px",
                borderRadius: "10px",
            }} className="fixed h-fit w-fit min-h-[40px] bg-slate-200">
                <button onClick={toogleOpen} className="absolute top-0 right-0 m-5 cursor-pointer bg-red-500 p-2">X</button>
                <h1>Update Content</h1>
                <form onSubmit={handleSubmit}>
                    {/* id harus sesuai dengan nama key dari item yang akan di submit */}
                    <label htmlFor="title">Title:</label>
                    <input id="title" defaultValue={values.title} value={values.title} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor="content">Content:</label>
                    <input id="content" defaultValue={values.description} value={values.description} onChange={handleChange} />
                    <br />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <button onClick={toogleOpen}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
    </>);
}

// card
const ContentCard = (props: any) => {

    // useEffect(() => {
    //     console.log(props);
    // }, [])
    const initial = {
        id: props.id,
        title: props.title,
        description: props.description,
    }
    const [values, setValues] = useState({
        id: props.id,
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
        e.preventDefault()
        router.delete(`/test/${props.id}`)
    }

    return (
        <div className="m-5 shadow-md rounded-md p-4 border-blue-300">
            <h1 className="text-black text-lg">{props.title}</h1>
            <p className="text-black">{props.description}</p>
            <UpdateModal {...props} /><button onClick={handleSubmit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
    );
};
