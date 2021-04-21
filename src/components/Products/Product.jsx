import React from 'react';
import './Product.scss';


const Product = ({name,image,price,description,onClick})=>{




    return(
        <div className='product-container'>
            <img className='image-size' src={image} alt={name}/>
        </div>
    )
}

export default Product;