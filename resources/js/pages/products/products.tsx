// ivan - 19 Juli 2023
import React from 'react'
import AppLayout from "@/layouts/app-layout"
import { Head } from '@inertiajs/react';
import Header from '@/components/general/header/header';
import ProductCard from '@/components/products/productsCard';
import "./products.scss";

export default function ProductPage({ products }: { products: any }) {
    return (
        <>
            <Head title='Products' />
            <Header
                page='Products'
                title={"Explore Our Products"}
                description="Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details."
            />
            <div id="Products">
                <div id="ProductsContainer">
                    {
                        products.map((product: any) => {
                            return (
                                <ProductCard {...product} />
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}


ProductPage.layout = (page: React.ReactNode) => <AppLayout children={page} />;
