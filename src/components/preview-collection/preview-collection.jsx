import React from "react";

import Items from "../items/items";
 import "./preview-collection.scss"

 const PreviewCollection = ({title, items}) =>(
     <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
         {items
         .filter((item, idx) => idx < 4)
         .map(({id, ...otherItemsProps}) => (
             <Items key={id} {...otherItemsProps}/>
         ))}

         </div>
     </div>
 )

 export default PreviewCollection;