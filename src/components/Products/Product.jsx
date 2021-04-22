import React from 'react';
import './Product.scss';


const Product = ({name,image_front,image_back,image_lat,price,description,onClick,poster_path})=>{

     console.log(image_front)
     


    return(
        <div className='product-container'>
            
           {<img className='image-size' src={image_front} alt={name}/>}
        </div>
    )
}

export default Product;