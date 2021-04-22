import React from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';


const Presupuestos =()=>{

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    if(credentials?.user.name){
        return (
            <>
            <Header style='logged-two'/>
           <div className="presupuestos-vista-container">
               soy presupuestos
           </div>
           </>
        )}else{
            return( 
            <>
            <Header style='presupuestos'/>
                <div>
                   
                </div>

            </>    
            )
                
            
        }
}

export default Presupuestos;