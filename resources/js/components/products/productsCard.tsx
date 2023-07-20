import React from 'react';
import "./productCard.scss";


export default function ProductsCard(props: any) {
    return (<>
        <div className="ProductCard">
            <img src={props.image} alt="" />
            <div id="ProductCard-Content">
                <h2 id='Title'>{props.name}</h2>
                <p id='Desc'>{props.description}</p>
                <button id='CTA'>See more</button>
            </div>
        </div>
    </>)
}