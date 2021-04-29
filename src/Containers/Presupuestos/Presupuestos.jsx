import React from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';
import  Carousel  from '../../components/Carousel/carousel';
import publi from '../../img/distribuidores-pc.jpg'

const Presupuestos =()=>{

    const credentials = JSON.parse(localStorage.getItem('credentials'));
   

   if(credentials?.user.name){
   return (
       <>
       <Header style='logged-two'/>
      <div className="presupuestos-vista-container">
          soy presupuesto
      </div>
      </>
   )}else{
       return(
       <>
       
           <div className="vista-presupuesto-container">
            <Header style='repuestos'/>
            <div className="body-container-prepusupuesto">
                <div className="vista-imagen-promocional">
                    <img src="" alt=""/>
                </div>
               </div>
           </div>
        </>
       )
           
       
   }
}

export default Presupuestos;