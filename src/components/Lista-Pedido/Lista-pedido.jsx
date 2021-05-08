import React, { useState } from 'react';
import './Lista-pedido.scss';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import calidad from '../../img/Quality.jpg';
import FatherDay from '../../img/black-friday.jpg';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CLEAN_CARRITO } from '../../Redux/Types';

const ListaPedidos =(props)=>{

  const carrito = props.carrito;
  const user = props.user; 
  console.log(carrito) 

  // Estado de la peticion 

   const [order,setOrder]=useState({
    
        user_id:'',
        userName:'',
        precio_total:'',
        product_info:'',
        payment:''

    
   })

   
  let  array = carrito;
  console.log(array[0])
  let carrito_en_string = JSON.stringify(carrito);
  

  let precioTotal = array.reduce((sum, value) => ( sum + parseInt(value.price) ), 0);



   let orderData = {

      user_id : user._id,
      precio_total : precioTotal,
      //product_info:array,
      product:carrito[0],
    
      payment:user.payment
   }
   console.log(orderData)

    const cleanCart =()=>{

    props.dispatch({type:CLEAN_CARRITO,payload:{}})
   }
  

   const sendOrderToDb = async ()=>{

     
          

       let response = await axios.post('http://localhost:3002/orders',orderData);
       console.log(response)

          cleanCart()

        
    
   }

  
  


  



 
    return (
   <>
    
           <Header style='register'/>
          

        <div className="lista-pedidos-container">

            <div className="tabla-lista-pedidos">
                <div className="titulo-tabla-pedido">
                   Este Es Tu Pedido - <strong>{user.name}</strong>
                </div>
                <div className="contenedor-lista-pedidos-mas-precio-final">
                    <div className ='lista-productos-eligidos'>
                    <Button variant="outlined" color="default">
                     Lista De Productos
                    </Button>
                    </div>

                    <div className="lista-detallada-de-productos">
                        {carrito.map((element,_id) => (<div key={_id}>
                               
                                <div className="nombre-del-producto">
                                    --Producto : {element.name}
                                </div>
                                <div className="precio-por-unidad">
                                    --Precio /Unidad  : {element.price}
                                </div><br/>

                            
                            
                            </div> ))}
                    </div>
                    <div className="precio-total-productos">
                        Precio Total : <strong>{precioTotal} Euros</strong> 
                    </div>

                </div>

                <div className="datos-envio-y-pago">

                    <div className="datos-de-pago">
                 
                               
                               <div className="datos tarjeta-credito"> 
                               Pago Con Tarjeta Registrada Numero: <br/>
                               Tarjeta: <strong>MasterCard</strong>  <br/>
                               A Nombre de : <strong>{user.payment?.nombre_tarjeta}</strong><br/>
                               Numero: <strong>{user.payment?.Numero_de_laTarjeta}</strong><br/>
                               
                               </div>
                               
                   </div>


                   <div className="datos-env">
                          Nombre : <strong>{user.name}</strong> <br/>
                          Direccion del envio : <strong>{user.adress}</strong> <br/>
                          Telefono:  <strong>{user.phone} </strong><br/>
                          horario De Entrega :   <strong>Sevicio 24h</strong> <br/>

                   </div>

                </div>
            </div>

            

            <div className="Validar">

            <Button variant="contained" color="primary" onClick={()=>sendOrderToDb()}>
                Validar compra
            </Button>
            
            </div>

        </div>
        </>
    )
}

const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps)(ListaPedidos);