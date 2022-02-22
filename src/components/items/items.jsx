import React from "react";

import './item.scss'

const Items =  ({id, name, price, imageUrl}) => (

    <div className="items">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>

        </div>
    </div>
)


export default Items;