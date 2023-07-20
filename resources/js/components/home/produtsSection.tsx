import React from 'react'
import "./produtsSection.scss";
import ProductsCard from '../products/productsCard';


export default function ProductsSection({ products }: { products: any }) {
    return (
        <div id="Product">
            <h1 id='title'>Our Product</h1>
            <div id="ProductContainer">
                {products.map((product: any) => {
                    return (
                        <ProductsCard {...product} />
                    )
                })
                }
            </div>
            <button id='CTA'>
                See more
            </button>
        </div>
    )
} 