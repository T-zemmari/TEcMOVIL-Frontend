import React from 'react';
import './Product.scss';
import Button from '@material-ui/core/Button'




const Product = (
    {
        name,
        marca,
        modelo,
        nombre,
        imgUrl,
        style,
        tamaño,
        label,
        _id,
        onClick,
        image_front,
        image_back,
        image_lat,
        price,
        rate,
        description,
        color,
        image1,
        image2,
        priceWithIva,


    
    }
    )=>{

    

   
    let ProductOnProfile = 
    <img className='image-size-grande' src={imgUrl} alt={name}/>
    

   if(style !=='admin' && tamaño === 'normal'){
    return(
        <div className='product-container'>
            
           <img className='image-size' src={imgUrl} alt={name} onClick ={onClick} />
           <div className="name-size" ><div className='name-size-settings-home'>{name}</div></div>
           <div className="rate-size"><div className="producto-color-settings-home">{color}</div></div>
           <div className="price-size"><div  className="producto-price-settings-home">{price}</div></div>
           <Button variant="outlined" color="primary" onClick={onClick}>
             Lo Quiero
           </Button>
           
       </div>
    )}
    if(style !=='admin' && tamaño === 'accessorio reducido'){
        return(
            <div className='product-container-accessorio-carrousel'>
                
            <img className='image-size-accessorio-carrousel' src={image1} alt={name} onClick ={onClick} />
            <div className="name-size-accessorio-carrousel" ><h3 className="name-size-accessorio-carrousel">{name}</h3></div>
            <div className="rate-size-accessorio-carrousel"><h4 className="h4-producto-color">{modelo}</h4></div>
            <div className="price-size-accessorio-carrousel"><h4  className="h4-producto-price">{price}</h4></div>
            <Button variant="outlined" color="primary" onClick={onClick}>
                     Lo quiero
              </Button>
            
        </div>
        )}
    if(style !=='admin' && tamaño === 'en-tienda'){
        return(
            <div className='product-container-en-tienda'>
                
               <img className='image-size-en-tienda' src={imgUrl} alt={name} onClick ={onClick} />
               <div className="name-size" ><div className='name-size-settings-home'>{name}</div></div>
           
               <div className="price-size-en-tienda"><div  className="producto-price-settings-tienda">{price}</div></div>
              <Button variant="outlined" color="primary" onClick={onClick}>
                     Lo quiero
              </Button>
            
                
          
               
           </div>
        )}


    if(style !=='admin' && nombre === 'repuesto'){
        return(
            <div className='product-container-repuesto'>
                
               <img className='image-size-repuesto' src={image1} alt={name}onClick ={onClick} />
               <div className="name-size" ><div className="h4-producto-color">{marca}</div></div>
               <div className="rate-size"><div className="h4-producto-color">{modelo}</div></div>
               
               <div className ='lo-quiero-repuesto'>
               <Button variant="contained" color="secondary" onClick={onClick}>
                     Lo quiero
              </Button>
               </div>
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
     
    }if(style !=='admin'  && label === 'accessorios-destacados'){
    return(
        <div className='product-container-accessorios'>
            
           <img className='image-size-accessorio' src={image1} alt={name} onClick ={onClick} />
           <div className="name-size" ><h3>{name}</h3></div>
           
           
       </div>
    )}


}

export default Product;