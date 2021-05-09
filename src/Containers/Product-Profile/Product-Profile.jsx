import React ,{useEffect, useState}from 'react';
import Header from '../../components/Header/Header';
import { useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import './Product-Profile.scss';
import { ADD_TO_CARRITO } from '../../Redux/Types';
import LoginRender from '../../components/Modal/Login-render';
import SimpleCollapse from '../../components/Transition/Transition';
import Product from '../../components/Products/Product';
import calidad from '../../img/Quality.jpg';

const ProductProfile = (props)=>{


  const [arrayProducts ,setArrayProducts]=useState([]);
  const [page,setPage]= useState('carrito-hidden');


  const accessorios = props.accessorios;

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    let history = useHistory();
   
     let datosProducto = JSON.parse(localStorage.getItem('productos'));
     console.log(datosProducto);
     let credentials = JSON.parse(localStorage.getItem('credentials'));
     

     //---------Datos del producto escogido---------//


     const product = props.product;
     console.log('Soy product y vengo de los props ', product)

      
     //--------Funcion que almacenara el producto en el carrito---------//

     
     const switchPages = (nextPage)=>{

      setPage(nextPage)
     }

        const addToCart =()=>{
        
        let product = props.product
        setArrayProducts([...arrayProducts,{...product}])
        props.dispatch({type:ADD_TO_CARRITO,payload:arrayProducts})
        //setPage('carrito')

      }
        const removeItem =(producto_a_eliminar)=>{

        setArrayProducts(arrayProducts.filter(producto => producto !== producto_a_eliminar))
        }


        const GetProductInfo = (product) => {
          localStorage.removeItem('productos');
          localStorage.setItem('productos',JSON.stringify(product));
          
          history.push('/product-profile')
       
       };


  
           
       {/*----------Renderizar------------Smarphoone-------------Usuario--------Logeado------*/}
  
  
  if(datosProducto?.imgUrl && credentials?.user.name && page ==='carrito-hidden'){

    return (
    <>
       <Header style ='logged-two'></Header>
      <div className="vista-product-profile-container">

       <div className="image-datainfo-and-div-garantia">

           <div className="Image-and-datainfo-together-product-profile">
         

          <div className="image-product-profile">
           <img className='img-product-size-on-profile' tamaño = 'grande' src={datosProducto.imgUrl} alt={datosProducto.name}/>
           
          </div>

         
          <div className="data-product-profile">
                  <h1 className='h1-vista-product-profile'>{datosProducto.name}</h1>
              <div className="masdatos">

                  <div className="vista-color-product-profile">
                    <h2 className='h2-vista-product-profile'> Color : {datosProducto.color}</h2>
                  </div>
                  <div className="vista-price-product-profile">
                   <h3 className="h3-precio">Precio con Iva  {" "}  </h3> 
                    <h2 className='h2-vista-product-profile price' >{datosProducto.price}</h2> 
                  </div>
                  <div className="vista-rate-product-profile">
                    <h2 className='h2-vista-product-profile'>Rate : {datosProducto.rate}</h2>
                  </div>
                  <div className="vista-pantalla-product-profile">
                    <h2 className='h2-vista-product-profile'>Pantalla : {datosProducto.pantalla} Pulgadas</h2>
                  </div>


               

                <div className="vista-more-info-pago-reparto-sat">
                  <div className="vista-icono-tarjeta"></div>
                  <div className="vista-div-more-info pagar-con-tarjeta">
                     Puedes pagar con tarjeta, contra reembolso cuando recibas tu pedido o mediante transferencia bancaria
                  </div>
                </div>

                <div className="vista-more-info-pago-reparto-sat">
                    <div className="vista-icono-reparto"></div>
                    <div className=" vista-div-more-info Repartimos-a-España">
                      Repartimos a España Península, Canarias, Baleares y Portugal
                    </div>
                  </div>  

                  <div className="vista-more-info-pago-reparto-sat">
                      <div className="vista-icono-flechas"></div>
                      <div className="vista-div-more-info Atención-al-cliente">
                      Atención al cliente personalizada, si tienes cualquier duda te ayudamos
                    </div>
                  </div> 
                 </div>
          </div>
         
         
         </div>
       <div className="vista-right-menu-product-profile">
              <div className="vista-disponible-product-profile">
                  <h3 className='h3-vista-disponible-product-profile'>Producto Disponible</h3>
              </div>
              <div className="vista-garantia-product-profile">


              
              <div className=" vista-comun-garantia-sat-devolucion
              ">   <div className="check-verde"></div>
                   Garantia : 24 meses
              </div>

              <div className="vista-entrega-product-profile vista-comun-garantia-sat-devolucion">
              <div className="check-verde"></div>
                   Servicio SAT eficaz
              </div>

              <div className="vista-devoluciones-product-profile vista-comun-garantia-sat-devolucion">
              <div className="check-verde"></div>
                   30 Dias de prueba
              </div>

              </div>

             <div className="vista-boton-comprar-product-profile" >
             <Button variant="contained" color="secondary" onClick={()=> switchPages('carrito')} onClick={()=>addToCart()}>
                      Añadir Al carrito
                  </Button>

    </div>
          </div>

       </div>
      
       <div className="vista-description-product-profile">
           <div className="contenedor-separador-mas-h2-vista-product-profile">
           <h2 className='h2-vista-product-profile'>Descripción</h2>
           <div className="separador-description"></div>
            </div>
           

           <div className="contenedor-description">
          
           <p className='p-vista-product-profile'>{datosProducto.description}</p>
           
           </div>
          </div>
        
       
            
            </div>
            {<footer className='footer-special-presupuesto'>
                            <div className="footer-container">
                                 <div className="vista-sobre-nosotros">
                                         Enlaces de interes
                                         <div>Envios</div>
                                         <div>Repuestos</div>
                                         <div>Accesorios</div>
                                         <div>Telefonos nuevos y de segunda mano</div>
                                         <div>Copyright TEcMovil</div>
        
                                  </div>
                             <div className="vista-sobre-nosotros">
                                           Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                                     <div></div>
                                     <div></div>
                                    </div>

                              <div className="vista-sobre-nosotros">
                                          
                                    <div className='calidad'>
                                        <img  className='calidad' src={calidad}/>
                                    </div>
            
                             </div>

                            </div>
                  </footer>}
        </> )
  }

  
   {/*----------Renderizar----------Smartphones-------------------Usuario-no-------logeado-----------------*/}
  
  
  if(datosProducto?.imgUrl && !credentials?.user.name && page ==='carrito-hidden'){

        return(
           
                <>
    <Header style ='register'></Header>
      <div className="vista-product-profile-container">
           <div className="image-datainfo-and-div-garantia">

          
        
         
         <div className="Image-and-datainfo-together-product-profile">
         

          <div className="image-product-profile">
           <img className='img-product-size-on-profile'tamaño ='grande' src={datosProducto.imgUrl} alt={datosProducto.name}/>
          </div>

         
          <div className="data-product-profile">
                  <h1 className='h1-vista-product-profile'>{datosProducto.name}</h1>
              <div className="masdatos">

                  <div className="vista-color-product-profile">
                    <h2 className='h2-vista-product-profile'> Color : {datosProducto.color}</h2>
                  </div>
                  <div className="vista-price-product-profile">
                   <h3 className="h3-precio">Precio con Iva  {" "}  </h3> 
                    <h2 className='h2-vista-product-profile price' >{datosProducto.price}</h2> 
                  </div>
                  <div className="vista-rate-product-profile">
                    <h2 className='h2-vista-product-profile'>Rate : {datosProducto.rate}</h2>
                  </div>
                  <div className="vista-pantalla-product-profile">
                    <h2 className='h2-vista-product-profile'>Pantalla : {datosProducto.pantalla} Pulgadas</h2>
                  </div>        

                <div className="vista-more-info-pago-reparto-sat">
                  <div className="vista-icono-tarjeta"></div>
                  <div className="vista-div-more-info pagar-con-tarjeta">
                     Puedes pagar con tarjeta, contra reembolso cuando recibas tu pedido o mediante transferencia bancaria
                  </div>
                </div>

                <div className="vista-more-info-pago-reparto-sat">
                    <div className="vista-icono-reparto"></div>
                    <div className=" vista-div-more-info Repartimos-a-España">
                      Repartimos a España Península, Canarias, Baleares y Portugal
                    </div>
                  </div>  

                  <div className="vista-more-info-pago-reparto-sat">
                      <div className="vista-icono-flechas"></div>
                      <div className="vista-div-more-info Atención-al-cliente">
                      Atención al cliente personalizada, si tienes cualquier duda te ayudamos
                    </div>
                  </div>         
              </div>
          </div>
          
       </div>
       <div className="vista-right-menu-product-profile">
              <div className="vista-disponible-product-profile">
                  <h3 className='h3-vista-disponible-product-profile'>Producto Disponible</h3>
              </div>
              <div className="vista-garantia-product-profile">


              
              <div className=" vista-comun-garantia-sat-devolucion
              ">   <div className="check-verde"></div>
                   Garantia : 24 meses
              </div>

              <div className="vista-entrega-product-profile vista-comun-garantia-sat-devolucion">
              <div className="check-verde"></div>
                   Servicio SAT eficaz
              </div>

              <div className="vista-devoluciones-product-profile vista-comun-garantia-sat-devolucion">
              <div className="check-verde"></div>
                   30 Dias de prueba
              </div>

              </div>

              <div className="vista-boton-comprar-product-profile" >
                <LoginRender onClick={()=>history.push('login')}>
                  <Button variant="contained" color="secondary">
                      Logeate Si Quieres hacer una compra
                  </Button>
                  </LoginRender>
              </div>
          </div>

       </div>
       <SimpleCollapse> 
       <div className="vista-description-product-profile">
         
           <h2 className='h2-vista-product-profile'>Descripción</h2>
          
           <p className='p-vista-product-profile'>{datosProducto.description}</p>
          </div>
        </SimpleCollapse>
         
       
                
            </div>
            {<footer className='footer-special-presupuesto'>
                            <div className="footer-container">
                                 <div className="vista-sobre-nosotros">
                                         Enlaces de interes
                                         <div>Envios</div>
                                         <div>Repuestos</div>
                                         <div>Accesorios</div>
                                         <div>Telefonos nuevos y de segunda mano</div>
                                         <div>Copyright TEcMovil</div>
        
                                  </div>
                             <div className="vista-sobre-nosotros">
                                           Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                                     <div></div>
                                     <div></div>
                                    </div>

                              <div className="vista-sobre-nosotros">
                                          
                                    <div className='calidad'>
                                        <img  className='calidad' src={calidad}/>
                                    </div>
            
                             </div>

                            </div>
                  </footer>}

        </> )
    }


 {/*----------Renderizar----------accessorio-------------------Usuario-----------No-----logeado-----------------*/}
  
  
 if(datosProducto?.image1 && !credentials?.user.name && page ==='carrito-hidden'){

  return(
     
          <>
<Header style ='register'></Header>
<div className="vista-product-profile-container">
     <div className="image-datainfo-and-div-garantia">

    
  
   
   <div className="Image-and-datainfo-together-product-profile">
   

    <div className="image-product-profile">
     <img className='img-product-size-on-profile'tamaño ='grande' src={datosProducto.image1} alt={datosProducto.name}/>
    </div>

   
    <div className="data-product-profile">
            <h1 className='h1-vista-product-profile'>{datosProducto.name}</h1>
        <div className="masdatos">

            <div className="vista-color-product-profile">
              <h2 className='h2-vista-product-profile'> Color : {datosProducto.color}</h2>
            </div>
            <div className="vista-price-product-profile">
             <h3 className="h3-precio">Precio con Iva  {" "}  </h3> 
              <h2 className='h2-vista-product-profile price' >{datosProducto.price}</h2> 
            </div>
            <div className="vista-rate-product-profile">
              <h2 className='h2-vista-product-profile'>Rate : {datosProducto.rate}</h2>
            </div>
            <div className="vista-pantalla-product-profile">
              <h2 className='h2-vista-product-profile'>Pantalla : {datosProducto.pantalla} Pulgadas</h2>
            </div>        

          <div className="vista-more-info-pago-reparto-sat">
            <div className="vista-icono-tarjeta"></div>
            <div className="vista-div-more-info pagar-con-tarjeta">
               Puedes pagar con tarjeta, contra reembolso cuando recibas tu pedido o mediante transferencia bancaria
            </div>
          </div>

          <div className="vista-more-info-pago-reparto-sat">
              <div className="vista-icono-reparto"></div>
              <div className=" vista-div-more-info Repartimos-a-España">
                Repartimos a España Península, Canarias, Baleares y Portugal
              </div>
            </div>  

            <div className="vista-more-info-pago-reparto-sat">
                <div className="vista-icono-flechas"></div>
                <div className="vista-div-more-info Atención-al-cliente">
                Atención al cliente personalizada, si tienes cualquier duda te ayudamos
              </div>
            </div>         
        </div>
    </div>
    
 </div>
 <div className="vista-right-menu-product-profile">
        <div className="vista-disponible-product-profile">
            <h3 className='h3-vista-disponible-product-profile'>Producto Disponible</h3>
        </div>
        <div className="vista-garantia-product-profile">


        
        <div className=" vista-comun-garantia-sat-devolucion
        ">   <div className="check-verde"></div>
             Garantia : 24 meses
        </div>

        <div className="vista-entrega-product-profile vista-comun-garantia-sat-devolucion">
        <div className="check-verde"></div>
             Servicio SAT eficaz
        </div>

        <div className="vista-devoluciones-product-profile vista-comun-garantia-sat-devolucion">
        <div className="check-verde"></div>
             30 Dias de prueba
        </div>

        </div>

        <div className="vista-boton-comprar-product-profile" >
          <LoginRender onClick={()=>history.push('login')}>
            <Button variant="contained" color="secondary">
                Logeate Si Quieres hacer una compra
            </Button>
            </LoginRender>
        </div>
    </div>

 </div>
 <SimpleCollapse> 
 <div className="vista-description-product-profile">
   
     <h2 className='h2-vista-product-profile'>Descripción</h2>
    
     <p className='p-vista-product-profile'>{datosProducto.description}</p>
    </div>
  </SimpleCollapse>
   
 
          
      </div>
      {<footer className='footer-special-presupuesto'>
                      <div className="footer-container">
                           <div className="vista-sobre-nosotros">
                                   Enlaces de interes
                                   <div>Envios</div>
                                   <div>Repuestos</div>
                                   <div>Accesorios</div>
                                   <div>Telefonos nuevos y de segunda mano</div>
                                   <div>Copyright TEcMovil</div>
  
                            </div>
                       <div className="vista-sobre-nosotros">
                                     Sobre Nosotros
                              <div>Calle los leones 28 bajo 46022 Valencia</div>
                               <div></div>
                               <div></div>
                              </div>

                        <div className="vista-sobre-nosotros">
                                    
                              <div className='calidad'>
                                  <img  className='calidad' src={calidad}/>
                              </div>
      
                       </div>

                      </div>
            </footer>}

  </> )
}

 {/*----------Renderizar----------accessorio-------------------Usuario---logeado-----------------*/}
  
  
 if(datosProducto?.image1 && credentials?.user.name && page ==='carrito-hidden'){

  return(
     
          <>
<Header style ='logged-two'></Header>
<div className="vista-product-profile-container">
     <div className="image-datainfo-and-div-garantia">

    
  
   
   <div className="Image-and-datainfo-together-product-profile">
   

    <div className="image-product-profile">
     <img className='img-product-size-on-profile'tamaño ='grande' src={datosProducto.image1} alt={datosProducto.name}/>
    </div>

   
    <div className="data-product-profile">
            <h1 className='h1-vista-product-profile'>{datosProducto.name}</h1>
        <div className="masdatos">

            <div className="vista-color-product-profile">
              <h2 className='h2-vista-product-profile'> Color : {datosProducto.color}</h2>
            </div>
            <div className="vista-price-product-profile">
             <h3 className="h3-precio">Precio con Iva  {" "}  </h3> 
              <h2 className='h2-vista-product-profile price' >{datosProducto.price}</h2> 
            </div>
            <div className="vista-rate-product-profile">
              <h2 className='h2-vista-product-profile'>Rate : {datosProducto.rate}</h2>
            </div>
            <div className="vista-pantalla-product-profile">
              <h2 className='h2-vista-product-profile'>Pantalla : {datosProducto.pantalla} Pulgadas</h2>
            </div>        

          <div className="vista-more-info-pago-reparto-sat">
            <div className="vista-icono-tarjeta"></div>
            <div className="vista-div-more-info pagar-con-tarjeta">
               Puedes pagar con tarjeta, contra reembolso cuando recibas tu pedido o mediante transferencia bancaria
            </div>
          </div>

          <div className="vista-more-info-pago-reparto-sat">
              <div className="vista-icono-reparto"></div>
              <div className=" vista-div-more-info Repartimos-a-España">
                Repartimos a España Península, Canarias, Baleares y Portugal
              </div>
            </div>  

            <div className="vista-more-info-pago-reparto-sat">
                <div className="vista-icono-flechas"></div>
                <div className="vista-div-more-info Atención-al-cliente">
                Atención al cliente personalizada, si tienes cualquier duda te ayudamos
              </div>
            </div>         
        </div>
    </div>
    
 </div>
 <div className="vista-right-menu-product-profile">
        <div className="vista-disponible-product-profile">
            <h3 className='h3-vista-disponible-product-profile'>Producto Disponible</h3>
        </div>
        <div className="vista-garantia-product-profile">


        
        <div className=" vista-comun-garantia-sat-devolucion
        ">   <div className="check-verde"></div>
             Garantia : 24 meses
        </div>

        <div className="vista-entrega-product-profile vista-comun-garantia-sat-devolucion">
        <div className="check-verde"></div>
             Servicio SAT eficaz
        </div>

        <div className="vista-devoluciones-product-profile vista-comun-garantia-sat-devolucion">
        <div className="check-verde"></div>
             30 Dias de prueba
        </div>

        </div>

        <div className="vista-boton-comprar-product-profile" >
         
          <Button variant="contained" color="secondary" onClick={()=>addToCart()}>
                      Añadir Al carrito
                  </Button>
          
        </div>
    </div>

 </div>
 <SimpleCollapse> 
 <div className="vista-description-product-profile">
   
     <h2 className='h2-vista-product-profile'>Descripción</h2>
    
     <p className='p-vista-product-profile'>{datosProducto.description}</p>
    </div>
  </SimpleCollapse>
   
 
          
      </div>
      {<footer className='footer-special-presupuesto'>
                      <div className="footer-container">
                           <div className="vista-sobre-nosotros">
                                   Enlaces de interes
                                   <div>Envios</div>
                                   <div>Repuestos</div>
                                   <div>Accesorios</div>
                                   <div>Telefonos nuevos y de segunda mano</div>
                                   <div>Copyright TEcMovil</div>
  
                            </div>
                       <div className="vista-sobre-nosotros">
                                     Sobre Nosotros
                              <div>Calle los leones 28 bajo 46022 Valencia</div>
                               <div></div>
                               <div></div>
                              </div>

                        <div className="vista-sobre-nosotros">
                                    
                              <div className='calidad'>
                                  <img  className='calidad' src={calidad}/>
                              </div>
      
                       </div>

                      </div>
            </footer>}

  </> )
}

}

const mapStateToProps =(state)=>{

  return {
      carrito : state.carritoReducer.carrito,
      user: state.userReducer.user,
      product:state.productReducer.product,
      accessorios:state.accessReducer.accessorios
  }
}

export default connect(mapStateToProps)(ProductProfile);