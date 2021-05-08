import React, { useEffect, useState } from 'react';
import './Repuestos.scss';
import Header from '../../components/Header/Header';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Product from '../../components/Products/Product';
import Portada from '../../img/portada-moviles.jpg';
import calidad from '../../img/Quality.jpg';

const Repuestos =()=>{

    let history = useHistory();

    const [page,setPage]=useState('repuestos')

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    
    const [repuestos,setRepuestos]= useState([]);
    const [accesorios,setAccessorios]= useState([]);


    useEffect(async()=>{

    let response_repuestos = await axios.get('http://localhost:3002/repuestos');
    setRepuestos(response_repuestos.data);
    let response_accessorios = await axios.get('http://localhost:3002/accessorios');
    setAccessorios(response_accessorios.data);

    },[]);


    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };

     const shwichPages=(nextPage)=>{

      setPage(nextPage)
     }
    
   

   if(credentials?.user.name && page === 'repuestos'){
   return (
    <>
    <div className="header"><Header style='tienda'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={Portada} alt="tab"/>
              </div>
    <div className="vista-Container-Tienda">
        

        <div className="nav-bar-container">
       
        
         <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
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

    {<footer className='footer-special-presupuesto'>
                            <div className="footer-container">
                                 <div className="vista-sobre-nosotros">
                                         Enlaces de interes
                                         <div>Envios</div>
                                         <div>Repuestos</div>
                                         <div>Accesorios</div>
                                         <div>Telefonos nuevos y de segunda mano</div>
                                         <div>Copyright TEcMovil</div>
        
                                  </div>
                             <div className="vista-sobre-nosotros">
                                           Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                                     <div></div>
                                     <div></div>
                                    </div>

                              <div className="vista-sobre-nosotros">
                                          
                                    <div className='calidad'>
                                        <img  className='calidad' src={calidad}/>
                                    </div>
            
                             </div>

                            </div>
                  </footer>}
    </>
   )}
   
   
   if(credentials?.user.name && page === 'accesorios'){


    return (
      <>
      <div className="header"><Header style='tienda'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={Portada} alt="tab"/>
              </div>
      <div className="vista-Container-Tienda">
          
  
          <div className="nav-bar-container">
         
          
           <Button variant="contained" color="secondary" onClick={()=>shwichPages('repuestos')}>
               Repuestos 
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
                Total Productos = {accesorios.length}
              </Button> 
                
             
            </div>
  
          
                
         
  
            {<div className="vista-todos-los-repuestos">
                {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
            </div>}
  
          <div className="vista-todos-los-accessorios">
  
            </div>
  
        </div>
  
      </div>
      </>)


   }if( page === 'repuestos'){
    return (
     <>
     <div className="header"><Header style='tienda'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={Portada} alt="tab"/>
              </div>
     <div className="vista-Container-Tienda">
         
 
         <div className="nav-bar-container">
        
         
          <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
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
       {<footer className='footer-special-presupuesto'>
                            <div className="footer-container">
                                 <div className="vista-sobre-nosotros">
                                         Enlaces de interes
                                         <div>Envios</div>
                                         <div>Repuestos</div>
                                         <div>Accesorios</div>
                                         <div>Telefonos nuevos y de segunda mano</div>
                                         <div>Copyright TEcMovil</div>
        
                                  </div>
                             <div className="vista-sobre-nosotros">
                                           Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                                     <div></div>
                                     <div></div>
                                    </div>

                              <div className="vista-sobre-nosotros">
                                          
                                    <div className='calidad'>
                                        <img  className='calidad' src={calidad}/>
                                    </div>
            
                             </div>

                            </div>
                  </footer>}
 
     </div>
     </>
    )}
    
    
    if( page === 'accesorios'){
 
 
     return (
       <>
       <div className="header"><Header style='tienda'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={Portada} alt="tab"/>
              </div>
       <div className="vista-Container-Tienda">
           
   
           <div className="nav-bar-container">
          
           
            <Button variant="contained" color="secondary" onClick={()=>shwichPages('repuestos')}>
                Repuestos 
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
                 Total Productos = {accesorios.length}
               </Button> 
                 
              
             </div>
   
           
                 
          
   
             {<div className="vista-todos-los-repuestos">
                 {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
             </div>}
   
           <div className="vista-todos-los-accessorios">
   
             </div>
   
         </div>
   
       </div>
       </>)
 
 
    }
   
  
}

export default Repuestos;