import React from "react"
import "./partnership.scss"

const PartnershipCard = () => {
    return (
        <div className="Partner-Card">
            <img className="img" src="https://i.ibb.co/0jJQY5Q/Partner-Card.png" alt="Partner-Card" />
            <h2>title</h2>
        </div>
    )
}

export default function PartnershipSection() {
    return (

        <div id="Partner">
            <h1>Our Partner</h1>
            <div id="partnership-section">
                <PartnershipCard />
                <PartnershipCard />
                <PartnershipCard />
                <PartnershipCard />
            </div>
        </div>
    )
}