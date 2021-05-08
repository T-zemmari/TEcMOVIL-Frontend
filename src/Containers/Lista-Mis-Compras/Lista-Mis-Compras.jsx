import React, { useEffect, useState } from 'react';
import './Lista-Mis-Compras.scss';
import calidad from '../../img/Quality.jpg';
import axios from 'axios';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Cesta from '../../components/Cesta/Cesta';
import productReducer from '../../Redux/Reducers/Product-reducer';




const ListaMisCompras = (props)=>{


    const [misCompras,setMisCompras]=useState([])

    
    const user = props.user; 
    console.log(user._id)
   
   useEffect(async() => {

      let dataFromDb = await axios.get('http://localhost:3002/orders')
      console.log(dataFromDb.data)

      const result = dataFromDb.data.filter(order => order._id !== user._id)
     setMisCompras(result)
       
   }, [])

   let array = [];
   misCompras.map(misCompras =>{
       array.push(misCompras.product)
   })
 

   

    return(

        <>
        <Header style='register'/>
        <div className="contenedor-lista-mis-compras">
        <div className="cesta-en-mis-compras">
        {array?.map(array=> <Cesta   style = 'mis-compras' key={array._id}   {...array}/>)}
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

                  </>
        
    )
}

const mapStateToProps =(state)=>{

    return {
      
        user: state.userReducer.user
    }
}



export default connect(mapStateToProps)(ListaMisCompras);