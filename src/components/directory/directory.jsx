import React from "react";

import MenuItem from "../menu-item/menu-item";
import './directory.style.scss'


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
                {
                  title: 'Monsteras',
                  imageUrl: 'https://monsteraplantresource.com/wp-content/uploads/2020/09/ergita-sela-1qrYxR2AVdc-unsplash-scaled.jpg',
                  id: 1,
                  linkUrl: 'shop/monsteras'
                },
                {
                  title: 'Succulents',
                  imageUrl: 'https://images.unsplash.com/photo-1551893665-f843f600794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80',
                  id: 2,
                  linkUrl: 'shop/succulents'
                },
                {
                  title: 'Indoor Plants',
                  imageUrl: 'https://images.unsplash.com/photo-1530968561612-341586ef608a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  id: 3,
                  linkUrl: 'shop/indoor'
                },
                {
                  title: 'Rare Plants',
                  imageUrl: 'https://live-production.wcms.abc-cdn.net.au/24a3feb7d6fe056fbe02c6ceb8a41d67?impolicy=wcms_crop_resize&cropH=1080&cropW=1620&xPos=0&yPos=0&width=862&height=575',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/rare'
                },
                {
                  title: 'Pots',
                  imageUrl: 'https://www.gardencentermag.com/fileuploads/publications/13/issues/103293/articles/images/AdobeStock_192008228_CCd_fmt.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/pots'
                }
              ]
        }
    }
    render(){
        return(
             <div className="directory-menu">
                 {
                     this.state.sections.map(({title, imageUrl, id, size}) => (
                         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                     ))
                 }
             </div>
        )
    }
}
export default Directory;