import React, { useEffect, useState } from 'react'

function Card(props) {
    
    const vendor = props.products.vendor;
    const name = props.products.name;
    const image = props.products.image_src;
    const price = props.products.price;
    const options = props.products.options;

    /* useEffect(() => {
        console.log(props.products.vendor);
    },[]) */
    return (
        <div className = "container-fluid">
            <div className="card" style={{width: "18rem"}}>
            <img src= {image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vendor}</h5>
                <p className="card-text">{name}</p>
                <p className="card-text">$ {price}</p>
            </div>
            </div>
        </div>
    )
}

export default Card;
