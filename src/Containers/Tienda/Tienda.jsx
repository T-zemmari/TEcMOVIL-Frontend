import React from 'react';
import './Tienda.scss';
import Header from '../../components/Header/Header';





const Tienda = (props)=>{

    let credentials = localStorage.getItem('credentials');
    let phones = localStorage.getItem('phones');
    let accessories = localStorage.getItem('allAccessories');
    console.log(phones);


   if(!credentials?.user.name){
    return (
        <>
        <Header  style ='register'/>
        <div className="vista-Container-Tienda">

            <div className="nav-bar-container">
           
            
            </div>

          <div className="vista-contenedor-telefonos-repuestos-accessorio">

              <div className="vista-todos-los-accessorios">

              </div>


          </div>

        </div>
        </>
    )
}



}

export default Tienda;