import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import tablet from '../../img/Tablet.jpg';
import accesorios from '../../img/accesories.png';
import smartphone from '../../img/Smartphones.jpg';
import repuestos from '../../img/reparar.png';
import './Home.scss';



const Home =(props)=>{



   return(


    <div className="home-container">
        

        <div className="vista-portada-uno">
           
            <img className="vista-portada-uno" src={tablet} alt="tab"/>
            <div className="header"><Header/></div>
        </div>
        <div className='separador'></div>

        <div className="vista-contenedor-rep-smart-acces">

           <div className="vista-contenedor-divs-rep-smart-acces">
           <div className="vista-contenido">
              <img className="vista-contenido" src={smartphone} alt="smart"/>
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
        

        <div className="footer"><Footer/></div>
        
    </div>
   )


}

export default Home;