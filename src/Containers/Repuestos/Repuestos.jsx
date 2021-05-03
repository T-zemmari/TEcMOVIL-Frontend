import React, { useEffect, useState } from 'react';
import './Repuestos.scss';
import Header from '../../components/Header/Header';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Product from '../../components/Products/Product';


const Repuestos =()=>{

    let history = useHistory();

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    
    const [repuestos,setRepuestos]= useState([]);



    useEffect(async()=>{

    let response = await axios.get('http://localhost:3002/repuestos');
    setRepuestos(response.data);

    },[]);


    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };
    
   

   if(credentials?.user.name){
   return (
    <>
    <Header  style ='logged-two'/>
    <div className="vista-Container-Tienda">
        

        <div className="nav-bar-container">
       
        
         <Button variant="contained" color="secondary">
             Accesorios 
         </Button>
         <Button variant="contained" color="secondary">
             Xiaomi
         </Button>
         <Button variant="contained" color="secondary">
             Samsung
         </Button>
         <Button variant="contained" color="secondary">
             Iphone
         </Button>



        </div>

      <div className="vista-contenedor-telefonos-repuestos-accessorio">

          <div className="vista-nav-bar">
            <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
            <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
              Total Productos = {repuestos.length}
            </Button> 
              
           
          </div>

        
              
       

          {<div className="vista-todos-los-repuestos">
              {repuestos.map(repuestos=> <Product key={repuestos._id}{...repuestos} nombre = 'repuesto' onClick={()=>GetProductInfo(repuestos)}/>)}
          </div>}

        <div className="vista-todos-los-accessorios">

          </div>

      </div>

    </div>
    </>
   )}else{
       return(
       <>
       <Header style='repuestos'/>
           <div>
               
           </div>
        </>
       )
           
       
   }
}

export default Repuestos;