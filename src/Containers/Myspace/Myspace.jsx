import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import Android from '../../img/Banner-soporte-tecnico-1024x320.jpg';
import accesorios from '../../img/accesories.png';
import smartphoneImage from '../../img/smarts.jpeg';
import repuestos from '../../img/flex.png';
import Cabecera from '../../img/distribuidores-pc.jpg';
import './Myspace.scss';
import Product from '../../components/Products/Product';
import axios from 'axios';
import {connect} from 'react-redux';
import { SMARTPHONES ,ACCESSORIOS, PRODUCT } from '../../Redux/Types';







const MySpace =(props)=>{

   //------------credenciales del usuario logueado.............//

   let credentiales = JSON.parse(localStorage.getItem('credentials'));
  
  
   let datosDelUsuario = props.user;
 

    
    const [destacados,setDestacados] = useState([]);
    const [accessorios_destacados,setAccessoriosDestacados] = useState([]);

   
   let history = useHistory();
   const goto =(go)=>{
    
     history.push(go)

   }

   
  //.................Aqui me traigo los datos de mis productos ...............//

   useEffect(async ()=>{

      
      let response = await axios.get('http://localhost:3002/products');
      props.dispatch({ type: SMARTPHONES, payload: response.data });
      localStorage.setItem('destacados',response.data);
      console.log(response.data)
      setDestacados(response.data.slice(2,8));
   

      let response_dos= await axios.get('http://localhost:3002/accessorios');
      props.dispatch({ type: ACCESSORIOS, payload: response_dos.data });
      localStorage.setItem('accesoriosDestacados',response_dos.data)
      
      let primeraPaginaAccessorios = response_dos.data.slice(0,3)
      setAccessoriosDestacados(primeraPaginaAccessorios);
 
       
   },[]);


   
  

  

   const GetProductInfo = (product) => {

      localStorage.removeItem('productos');
      localStorage.setItem('productos',JSON.stringify(product));

      props.dispatch({type:PRODUCT,payload:product});
      
      history.push('/product-profile')
   
   };

   


  
   if(credentiales?.token){
   return(

   <div className="home-container">
         <div className="header"><Header style='logged'/></div>

        <div className="vista-portada-uno">
          
          
            <img className="vista-portada-uno" src={Cabecera} alt="tab"/>
            
        </div>
        

       

        <div className='separador'></div>

           <h2>Productos destacados</h2>
         

           
           <div className="destacados-z-index-superior" >
              {destacados?.map(destacados => <Product  tamaño='normal' key={destacados._id}  {...destacados} onClick={()=>GetProductInfo(destacados) } />)}
              </div>

              <div className="destacados-accesorios-home">

           {accessorios_destacados?.map(accessorios_destacados => <Product  label = 'accessorios-destacados' key={accessorios_destacados._id}  {...accessorios_destacados}  onClick={()=>GetProductInfo(accessorios_destacados) } />)}
              
           </div>
           



           <div className='separador'></div>

        <h2>CATEGORIAS</h2>
        <div className="home-categorias">

        </div>

      

        <div className="vista-contenedor-rep-smart-acces">

           <div className="vista-contenedor-divs-rep-smart-acces">
           <div className="vista-contenido">
              <img onClick={(go)=>goto('/tienda')} className="vista-contenido" src={smartphoneImage} alt="smart"/>
           </div> 
           <p className='p-home-titulo'>Telefonos</p> 
           <p className='p-home-parrafo'>Navega por nuestro catalogo, y elige el accesorio que <br/>
           mas te gusta, a un precio de chollo.</p> 
           </div>

           <div className="vista-contenedor-divs-rep-smart-acces">
           <div className="vista-contenido">
              <img className="vista-contenido" src={repuestos} alt="repuestos"/>
           </div>
           <p className='p-home-titulo'>Repuestos</p>
           <p className='p-home-parrafo'>Navega por nuestro catalogo, y elige el accesorio que <br/>
           mas te gusta, a un precio de chollo.</p>
           </div>

           <div className="vista-contenedor-divs-rep-smart-acces">
           <div className="vista-contenido">
              <img className="vista-contenido" src={accesorios} alt="accesorios"/>
           </div> 
           <p className='p-home-titulo'>Accesorios</p>
           <p className='p-home-parrafo'>Navega por nuestro catalogo, y elige el accesorio que <br/>
           mas te gusta, a un precio de chollo.</p>
           </div>
        </div>
        <div className="separador"></div>
        <h2> PRODUCTOS ESTRELLA</h2>

       
        
    </div>
   
   )}else{
      {history.push('/')}
   }
   }



   const mapStateToProps = (state)=>{

      return {
          user:state.userReducer.user,
          token:state.userReducer.token,
         //  smartphones:state.smartReducer.smartphones,
         //  accessorios:state.accessReducer.accessorios
   }
}
export default connect(mapStateToProps)(MySpace);