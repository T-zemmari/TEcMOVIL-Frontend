import React, { useEffect, useState } from 'react';
import './Admin.scss';
import Header from '../../components/Header/Header';
import ProductsAdmin from '../../components/Products-Admin/Products-admin';
import Button from '@material-ui/core/Button';
import User from '../../components/User/User';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const Admin =(props)=>{

  const [usuario,setUsuario]=useState([]);
  const [loading,setLoading]=useState(false);
  const [products,setProducs]=useState([]);

  let UserEndpoint='http://localhost:3002/users';
  let ProductEndpoint = 'http://localhost:3002/products';

  useEffect(async ()=>{
      setUsuario([]);
      setProducs([]);
  },[])

  const listaUsuarios =async ()=>{
   
   let userData= await axios.get(UserEndpoint);
   setUsuario(userData.data) ;
   
  }
  const listaProductos = async()=>{
    let productsData = await axios.get(ProductEndpoint);
    setProducs(productsData.data);
    console.log(products)
  }
  
 

  
    return(
          
        <div className="vista-admin-container">
                 <Loading visible={loading}></Loading>
                 <Header style ='Admin'></Header>
         <div className="body-vista-admin">
            {/*--------------------Menu Izquierdo------------------------- */}
            
             <div className="vista-menu-izquierda-admin">
               <div className="boton-admin-menu-izquierdo"> <Button variant="contained" color="primary" onClick ={()=>{listaProductos()}}>
                 Lista D Productos
               </Button>
               </div>
               <div className="boton-admin-menu-izquierdo"> 
               <Button variant="contained" color="primary" onClick ={()=>{listaUsuarios()}}>
                 Lista De Usuarios
               </Button>
               </div>
               <div className="boton-admin-menu-izquierdo"> 
               <Button variant="contained" color="primary">
                 Stock De Xiaomi
               </Button>
               </div>
               <div className="boton-admin-menu-izquierdo"> 
               <Button variant="contained" color="primary">
                 Stock Samsung
               </Button>
               </div>
              
              
                 <div className="Usuarios-Registrados-Menu-Izquierda"></div>

                {/*--------------------Usuarios Menu Central-----------------------*/}

             </div>


             <div className="vista-central-admin">

                 <div className="Registro-titulo-admin">
                     <h2>Lista De Los Usuarios Registrados</h2>
                 </div>
               
               <div className="lista-usuarios-registrados">
                   <div className=" user-data-admin user-name-admin-view">Nombre</div>
                   <div className="user-data-admin  user-lastname-admin-view">Apellidos</div>
                   <div className="user-data-admin user-email-admin-view">Email</div>
                   <div className="user-data-admin user-phone-admin-view">Telefono</div>
                   <div className="user-data-admin user-adress-admin-view">Dirección</div>
                   <div className="user-data-admin user-born-admin-view">F-Nacimiento</div>
                   <div className="user-data-admin  user-payment-admin-view">Pago</div>
               </div>

          
               <div>
                {usuario?.map(usuario => <User key={usuario._id} {...usuario}/>)}
               </div>

                {/*---------------------Productos Menu Central-----------------------*/}

                <div className="lista-productos">
                <h2>Lista De Los Productos Registrados</h2>

                </div>

                <div className="lista-productos-registrados">
                   <div className="product-data-admin product-identificador-admin-view">Identificador</div>
                   <div className="product-data-admin product-name-admin-view">Producto</div>
                   <div className="product-data-admin product-price-admin-view">precio</div>
                   <div className="product-data-admin product-color-admin-view">Color</div>
                   <div className="product-data-admin product-rate-admin-view">rate</div>
                   <div className="product-data-admin product-pantalla-admin-view">Pantalla</div>
                   <div className="product-data-admin product-image-admin-view">image</div>
               </div>

               <div>
                {products?.map(products => <ProductsAdmin key={products._id} {...products}/>)}
               </div>

                 




               

             </div>
         </div>
        </div>
    )
}


export default Admin;