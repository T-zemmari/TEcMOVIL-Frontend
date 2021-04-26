import React from 'react';
import './Product.scss';


const Product = ({name,imgUrl,style,tamaño,label,_id,onClick,image_front,image_back,image_lat,price,description,color})=>{

    

   
    let ProductOnProfile = 
    <img className='image-size-grande' src={imgUrl} alt={name}/>
    

   if(style !=='admin' && tamaño === 'normal'){
    return(
        <div className='product-container'onClick ={onClick}>
            
           <img className='image-size' src={imgUrl} alt={name} />
           <div className="name-size" ><h3>{name}</h3></div>
           <div className="rate-size"><h4 className="h4-producto-color">{color}</h4></div>
           <div className="price-size"><h4  className="h4-producto-price">{price}</h4></div>
           
       </div>
    )}


    if(style !=='admin' && tamaño === 'grande'){
        return(
           
                
              {ProductOnProfile}
         
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