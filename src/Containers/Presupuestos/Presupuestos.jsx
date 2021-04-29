import React from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';
import FormInput from '../../components/FormInput/FormInput';


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

                <div className="vista-seleccionar-marca-modelo">
                    Selecciona <h2 className="he2-vista-presupuesto">Marca y Modelo</h2>
                    
                </div>

                <div className="-vista-modelos-y-marca">
                 
                </div>
               </div>
           </div>
        </>
       )
           
       
   }
}

export default Presupuestos;