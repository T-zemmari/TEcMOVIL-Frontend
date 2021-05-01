import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import Android from '../../img/48369.jpg';
import accesorios from '../../img/accesories.png';
import smartphone from '../../img/smarts.jpeg';
import repuestos from '../../img/flex.png';
import Loading from '../../components/Loading/Loading';
import ProductProfileRender from '../../components/Modal/Profile-product-render';
import './Myspace.scss';
import Product from '../../components/Products/Product';
import axios from 'axios';




const MySpace =(props)=>{

   //------------credenciales del usuario logueado.............//

   let credentiales = JSON.parse(localStorage.getItem('credentials'));
   console.log(credentiales.user?.name)

    
    const [destacados,setDestacados] = useState([]);

   
   let history = useHistory();
   const goto =(go)=>{
    
     history.push(go)

   }

   
  //.................Aqui me traigo los datos de mis productos ...............//

   useEffect(async ()=>{

      
      let response = await axios.get('http://localhost:3002/products');
      localStorage.setItem('destacados',response.data);
      setDestacados(response.data);
      console.log(destacados);
       
   },[]);

   /*const takeMeTo = (producto) => {
      localStorage.setItem('product', JSON.stringify(producto));
      let productData = localStorage.getItem('product');
      console.log(productData);
      history.push('/product-profile')
   
   };*/
   /*const takeMeToo = (product) => {
      localStorage.setItem('prductos', JSON.stringify(product));
      console.log(product)
      //history.push('/product-profile');
   };*/

   const GetProductInfo = (product) => {
      localStorage.removeItem('productos');
      localStorage.setItem('productos',JSON.stringify(product));
      history.push('/product-profile')
   
   };


  
   if(credentiales.user?.name){
   return(

   <div className="home-container">
        

        <div className="vista-portada-uno">
           
          
            <img className="vista-portada-uno" src={Android} alt="tab"/>
            <div className="header"><Header style='logged'/></div>
        </div>
        

       

        <div className='separador'></div>

           <h2>Productos destacados</h2>


           
           <div className="destacados-z-index-superior" >
              {destacados?.map(destacados => <Product  tamaño='normal' key={destacados._id}  {...destacados} onClick={()=>GetProductInfo(destacados) } />)}
              </div>
           



           <div className='separador'></div>

        <h2>CATEGORIAS</h2>
        <div className="home-categorias">

        </div>

      

        <div className="vista-contenedor-rep-smart-acces">

           <div className="vista-contenedor-divs-rep-smart-acces">
           <div className="vista-contenido">
              <img onClick={(go)=>goto('/tienda')} className="vista-contenido" src={smartphone} alt="smart"/>
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

        <div className="footer"><Footer/></div>
        
    </div>
   
   )}else{
      {history.push('/')}
   }
   }




export default MySpace;