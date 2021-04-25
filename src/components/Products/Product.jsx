import React from 'react';
import './Product.scss';


const Product = ({name,imgUrl,style,image_front,image_back,image_lat,price,description,onClick,poster_path,color})=>{

    
     

   if(style === 'myspace'){
    return(
        <div className='product-container'>
            
           <img className='image-size' src={imgUrl} alt={name}/>
           <div className="name-size" onClick={onClick}><h3>{name}</h3></div>
           <div className="rate-size"><h4 className="h4-producto-color">{color}</h4></div>
           <div className="price-size"><h4  className="h4-producto-price">{price}</h4></div>
           
       </div>
    )}
    if(style ==='admin'){

        return(

            <div>
                
                 <div className="vista-name-productos-admin">
                      Nombre Producto
                  </div>
                  <div className="vista-price-productos-admin">
                       Precio Unidad
                  </div>
                  <div className="vista-imgUrl-productos-admin">
                      imgUrL
                  </div>
                  <div className="vista-description-productos-admin">
                      Descripción Producto
                  </div>
                  <div className="vista-creation-date-productos-admin">
                      Dia del Registro
                  </div>
               </div>

        )
    }

}

export default Product;