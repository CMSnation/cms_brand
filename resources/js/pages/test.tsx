import { usePage } from "@inertiajs/react";
import { useEffect } from "react";


export default function Test({ products }: any) {
    // const { products } = usePage<any>().props;

    useEffect(() => {
        console.log(products);
    }, []);
    return (
        <>
            <h1>Test Banget 123</h1>
            <p>{products.name}</p>
            <p>{products.age}</p>
        </>
    );
}