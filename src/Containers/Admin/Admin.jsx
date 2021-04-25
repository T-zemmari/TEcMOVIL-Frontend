import React, { useEffect, useState } from 'react';
import './Admin.scss';
import Header from '../../components/Header/Header';
import Button from '@material-ui/core/Button';
import User from '../../components/User/User';
import axios from 'axios';

const Admin =(props)=>{

  const [usuario,setUsuario]=useState([]);

  let UserEndpoint='http://localhost:3002/users';

  useEffect(async ()=>{
      setUsuario([])
  },[])

  const listaUsuarios =async ()=>{
   
   let userData= await axios.get(UserEndpoint);
   setUsuario(userData.data)   
   
  }
  
  console.log(usuario)

  /*if(!usuario){
      return;
  }else{
    let name =usuario.foreach(element =>{
       return  <div>{element.name}</div>
      
   })}*/
  




    return(

        <div className="vista-admin-container">
 <Header style ='Admin'></Header>
         <div className="body-vista-admin">


             <div className="vista-menu-izquierda-admin">
               <div className="boton-admin-menu-izquierdo"> <Button variant="contained" color="primary">
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
              
              
                 <div
                 
                 className="Usuarios-Registrados-Menu-Izquierda"></div>



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

              {/* <div className="lista-usuarios-registrados-datos">
                   <div className=" user-data-admin-datos  
                     user-name-admin-view"></div>
                   
                   <div className="user-data-admin-datos  user-lastname-admin-view"></div>

                   <div className="user-data-admin-datos
                    user-email-admin-view"></div>

                   <div className="user-data-admin-datos 

                   user-phone-admin-view"></div>

                   <div className="user-data-admin-datos
                    user-adress-admin-view"></div>
                   <div className="user-data-admin-datos
                    user-born-admin-view"></div>
                   <div className="user-data-admin-datos
                    user-payment-admin-view"></div>
    </div>*/}

               

             </div>
         </div>
        </div>
    )
}


export default Admin;