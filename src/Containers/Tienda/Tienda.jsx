import React, { useEffect, useState } from 'react';
import './Tienda.scss';
import Header from '../../components/Header/Header';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Product from '../../components/Products/Product';
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { SMARTPHONES,ACCESSORIOS } from '../../Redux/Types';




const Tienda = (props)=>{

    let history = useHistory();
    
    const user = props.user;
    const token=props.token; 
    

    const credentials = JSON.parse(localStorage.getItem('credentials'));


    const [phones,setPhones]=useState([]);
    const [accesorios,setAccessorios]=useState([]);
    //const [smartphones,setphones]=useState([]);
   

    const [page,setPage]=useState('pageOne');
    console.log(page)
    console.log(user)

    const switchPages=(nextPage)=>{

        setPage(nextPage)
    }

    let imgArr=[
        'https://fondosmil.com/fondo/32772.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInnPiPu1yksTuAH79j5mkjW3IcgwcDRIY16DONrXrjJZnQaFbdTK7by4kfHdWSNHy4eM&usqp=CAU'
    ]

    useEffect(async()=>{

         let response_for_phones = await axios.get('http://localhost:3002/products');
         setPhones(response_for_phones.data);
         props.dispatch({type:SMARTPHONES,payload:response_for_phones.data});

         let response_for_access = await axios.get('http://localhost:3002/accessorios');
         setAccessorios(response_for_access.data);
         props.dispatch({type:ACCESSORIOS,payload:response_for_access.data});
    },[])

    
    
    console.log(phones);
    console.log(accesorios);


    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };
    
     console.log(props?.token)

     const shwichPages=(nextPage)=>{

        setPage(nextPage)
       }


     if(credentials?.user.name && page ==='pageOne'){
        return (
         <>
         <Header  style ='logged-two'/>
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
                   Total Productos = {phones.length}
                 </Button> 
                   
                
               </div>
     
             
                   
            
     
               {<div className="vista-todos-los-repuestos">
                   {phones.map(smartphones=> <Product key={phones._id}{...phones} nombre = 'repuesto' onClick={()=>GetProductInfo(phones)}/>)}
               </div>}
     
             <div className="vista-todos-los-accessorios">
     
               </div>
     
           </div>
     
         </div>
         </>
        )}
        
        
        if(credentials?.user.name && page === 'accesorios'){
     
     
         return (
           <>
           <Header  style ='logged-two'/>
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
     
     
        }if(!credentials?.user.name && page === 'accesorios'){
     
     
            return (
              <>
              <Header  style ='register'/>
              <div className="vista-Container-Tienda">
                  
          
                  <div className="nav-bar-container">
                 
                  
                   <Button variant="contained" color="secondary" onClick={()=>shwichPages('repuestos')}>
                       Smartphones 
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
        
        
        else{
            return(
          
          
             
                <>
         <Header  style ='register'/>
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
                   Total Productos = {phones.length}
                 </Button> 
                   
                
               </div>
     
             
                   
            
     
               {<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño = 'normal' onClick={()=>GetProductInfo(phones)}/>)}
               </div>}
     
             <div className="vista-todos-los-accessorios">
     
               </div>
     
           </div>
     
         </div>
         </>
                    
             
         
            )
                
            
        }
     }
    


const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user,
        product:state.productReducer.product,
        smartphones:state.smartReducer.smartphones,
        accessorios:state.accessReducer.accessorios
    }
 }
 
 
 export default connect(mapStateToProps)(Tienda);