import React from 'react';
import Header from '../../components/Header/Header';
import tablet from '../../img/Tablet.jpg';
import './Home.scss';



const Home =(props)=>{



   return(


    <div className="home-container">
        

        <div className="vista-portada-uno">
           
            <img className="vista-portada-uno" src={tablet} alt="tab"/>
            <div className="header"><Header/></div>
        </div>
        <div className="vista-contenedor-resp-smart-acces">
           <div className="vista-contenido"></div>
           <div className="vista-contenido"></div>
           <div className="vista-contenido"></div>
        </div>
    </div>
   )


}

export default Home;