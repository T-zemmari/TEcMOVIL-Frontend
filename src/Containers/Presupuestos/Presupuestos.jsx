import React from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';
import  Carousel  from '../../components/Carousel/carousel';

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
                <div className="caroussel-container">
                <Carousel ></Carousel>
                </div>
               </div>
           </div>
        </>
       )
           
       
   }
}

export default Presupuestos;