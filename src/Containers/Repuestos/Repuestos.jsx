import React from 'react';
import './Repuestos.scss';
import Header from '../../components/Header/Header';

const Repuestos =()=>{

    const credentials = JSON.parse(localStorage.getItem('credentials'));
   

   if(credentials?.user.name){
   return (
       <>
       <Header style='logged-two'/>
      <div className="presupuestos-vista-container">
          soy repuestos
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