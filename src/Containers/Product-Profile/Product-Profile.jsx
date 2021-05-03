import React ,{useEffect, useState}from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useHistory} from 'react-router-dom';
import {Avatar, Button, ClickAwayListener} from '@material-ui/core';
import {connect} from 'react-redux';
import './Product-Profile.scss';
import { ADD_TO_CARRITO } from '../../Redux/Types';



const ProductProfile = (props,{tamaño})=>{


  const [arrayProducts ,setArrayProducts]=useState([]);
 


  


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

     

      const addToCart =()=>{
        let product = props.product
        setArrayProducts([...arrayProducts,{...product}])
        props.dispatch({type:ADD_TO_CARRITO,payload:arrayProducts})

      }

      const removeItem =(producto_a_eliminar)=>{

        setArrayProducts(arrayProducts.filter(producto => producto !== producto_a_eliminar))
    }
  
     
      console.log(arrayProducts)



   

    if(datosProducto?.name && credentials?.user.name){

    return (
    <>
       <Header style ='logged-two'></Header>
      <div className="vista-product-profile-container">
           <div className="image-datainfo-and-div-garantia">

          
        
         
         <div className="Image-and-datainfo-together-product-profile">
         

          <div className="image-product-profile">
           <img className='img-product-size-on-profile'tamaño ='grande' src={datosProducto.imgUrl} alt={datosProducto.name}/>
           
           <img className='img-product-size-on-profile-accessorio'tamaño ='grande' src={datosProducto.image1} alt={datosProducto.name}/>
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
                  <Button variant="contained" color="secondary"onClick={()=>addToCart()}>
                      Comprar Ahora
                  </Button>
    </div>
          </div>

       </div>

       <div className="vista-description-product-profile">
          <h2 className='h2-vista-product-profile'>Descripción</h2>
           <p className='p-vista-product-profile'>{datosProducto.description}</p>
          </div>

         
       
                
            </div>
        </> )
  }if(datosProducto?.name && !credentials?.user.name){

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
                  <Button variant="contained" color="secondary"onClick={()=>addToCart()}>
                      Añadir Al Carrito
                  </Button>
              </div>
          </div>

       </div>

       <div className="vista-description-product-profile">
          <h2 className='h2-vista-product-profile'>Descripción</h2>
           <p className='p-vista-product-profile'>{datosProducto.description}</p>
          </div>

         
       
                
            </div>
        </> )
    }
}

const mapStateToProps =(state)=>{

  return {
      carrito : state.carritoReducer.carrito,
      user: state.userReducer.user,
      product:state.productReducer.product
  }
}

export default connect(mapStateToProps)(ProductProfile);