import React ,{useEffect, useState} from 'react';
import './Header.scss';
import {useHistory} from 'react-router-dom';
import LoginRender from '../Modal/Login-render';
import Loading from '../Loading/Loading';
import axios from 'axios';
import ShopingCart from '../../img/shopping_cart-removebg-preview.png';
import {Avatar, Button} from '@material-ui/core';
import {connect} from 'react-redux';



const Header = (props)=>{

    // Me traigo los datos del carro , usuario , telefonos y accessorios de redux//

    const  carrito = props.carrito;
    let credentials = JSON.parse(localStorage.getItem('credentials'));

    // hooks



    const [loading, setLoading] = useState(false);
    
 

     let history = useHistory();

      const goto =(go)=>{
        history.push(go)
 
      }

  
  

  const Logout=()=>{
    
    let confirm = window.confirm('Seguro que quieres salir ??');

    if(confirm){

        setTimeout(() => {
            history.push('/');
            localStorage.removeItem('credentials');
            setLoading(true);
            
          }, 1000);
    }
      
  }

  const takeMeTo=()=>{

    if(credentials?.user.name){
        history.push('/mis-compras')
    }
    else(alert('Tienes Que Logearte Para Poder Ver Tus Productos'))
  }
  
if(props.style === 'home' ){
   return(

    
    <div className="header-container">
        <Loading visible={loading}></Loading>
        <div className="vista-logo" onClick={()=>history.push('/')}>TEcMovil</div>
        <div className="vista-nav">
           
            <li className='li-home' onClick={()=>history.push('/tienda')}>Tienda</li>
            <li className='li-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
            <li className='li-home'>Repuestos</li>
            <LoginRender>
                
                <Button variant="contained" color="primary">
                Entrar
                </Button>
            </LoginRender>
            
        </div>

                      
    </div>
   )
}if(props.style === 'register' ){
            return(

    
                <div className="header-container-not-home">
                    <Loading visible={loading}></Loading>
                    <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
                    <div className="vista-nav">
                        
                        <li className='li-not-home' value="Tienda"onClick={(go)=>goto('/tienda')}>Tienda</li>
                        <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                        <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                        <li className='li-not-home' onClick={()=>takeMeTo()}>Mis Compras</li>
                      
                    </div>
                  
                            
                        <div className="vista-contenedor-carrito-imagen-cantidad" onClick={()=>history.push('/cart')}>
                                <h5 className="h5-carrito">{carrito?.length}</h5>
                                <div className="vista-icono-carrito">
                                  <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                                </div>
                            </div>
                           
                </div>
               )
}if(props.style === 'tienda' ){
    return(


        <div className="header-container-tienda">
            <Loading visible={loading}></Loading>
            <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
            <div className="vista-nav">
                
                <li className='li-not-home' value="Tienda"onClick={(go)=>goto('/tienda')}>Tienda</li>
                <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                <li className='li-not-home' onClick={()=>takeMeTo()}>Mis Compras</li>
              
            </div>
          
                    
                <div className="vista-contenedor-carrito-imagen-cantidad" onClick={()=>history.push('/cart')}>
                        <h5 className="h5-carrito">{carrito?.length}</h5>
                        <div className="vista-icono-carrito">
                          <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                        </div>
                    </div>
                   
        </div>
       )
}

if(props.style === 'tienda-not-logged' ){
    return(


        <div className="header-container-tienda">
            <Loading visible={loading}></Loading>
            <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
            <div className="vista-nav">
                
                <li className='li-not-home' value="Tienda"onClick={(go)=>goto('/tienda')}>Tienda</li>
                <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                <li className='li-not-home'>Contactenos</li>
              
            </div>
          
                    
               
                   
        </div>
       )
}



if(props.style === 'Admin' ){
    return(


        <div className="header-container-not-home">
            <Loading visible={loading}></Loading>
            <div className="vista-logo" onClick={()=>Logout()}>TEcMovil</div>
            
        </div>
       )
}


if(props.style === 'logged' && credentials?.user.name){
            return(
                
                
                <div className="header-container-home-user-logged">
                    <Loading visible={loading}></Loading>
                    <div className="vista-logo" onClick={(go)=>goto('/myspace')} >TEcMovil</div>
                    <div className="vista-nav">
     

                        
                        <li  className='li-not-home' value="Smartphones"onClick={(go)=>goto('/tienda')}>Tienda</li>
                        <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                        <li className='li-not-home'onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                      
                        
                        </div>
                       
                            
                        <div className="vista-contenedor-carrito-imagen-cantidad" onClick={()=>history.push('/cart')}>
                                <h5 className="h5-carrito">{carrito?.length}</h5>
                                <div className="vista-icono-carrito">
                                  <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                                </div>
                            </div>
                            

                        <div className="vista-user-logged">
                          
                          <Avatar onClick={()=>{history.push('/profile-user')}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
                        {credentials.user?.name[0]}</Avatar>
                        
            <h4 className="h4-vista-logged" onClick={()=>Logout()}>Hola {credentials.user?.name}</h4>
                        </div>
            </div>)
                
}if(props.style === 'logged-two'){
                return(
                    
                    
                    <div className="header-container-repuestos-Presupuesto-user-logged">

                        <Loading visible={loading}></Loading>
                        
                        <div className="vista-logo" onClick={(go)=>goto('/myspace')}>TEcMovil</div>

                        

                            <div className="vista-nav">
                            <li  className='li-not-home' value="Tienda"onClick={(go)=>goto('/tienda')}>Tienda</li>
                            <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                            <li className='li-not-home'onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                            </div>
                           

                           
                            <div className="vista-contenedor-carrito-imagen-cantidad" onClick={()=>history.push('/cart')}>
                                <h5 className="h5-carrito">{carrito?.length}</h5>
                                <div className="vista-icono-carrito">
                                  <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                                </div>
                            </div>
                          


                            <div className="vista-user-logged">
                              
                              <Avatar onClick={()=>{history.push('/profile-user')}}  alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
                            {credentials.user?.name[0]}</Avatar>
                            
                <h4 className="h4-vista-logged" onClick={()=>Logout('/')}>Hola {credentials.user?.name}</h4>
                            </div>
                </div> )
}if(props.style === 'repuestos' ){
                return(
               
        
                    <div className="header-container-not-home">
                        <Loading visible={loading}></Loading>
                        <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
                        <div className="vista-nav">
                            
                            <li className='li-not-home' onClick={(go)=>goto('/')}>Inicio</li>
                               
                           
                            <li onClick={()=>history.push('/tienda')} className='li-not-home' value="Smartphones">Tienda</li>
                            <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                            <li className='li-not-home'>Contactenos</li>
                          
                        </div>

                       
                        <div className="vista-contenedor-carrito-imagen-cantidad" onClick={()=>history.push('/cart')}>
                                <h5 className="h5-carrito">{carrito?.length}</h5>
                                <div className="vista-icono-carrito">
                                  <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                                </div>
                            </div>
                           
                    </div>)
}if(props.style === 'presupuestos' ){
                    return(
        
            
                        <div className="header-container-not-home">
                            <Loading visible={loading}></Loading>
                            <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
                            <div className="vista-nav">
                                
                                <li className='li-not-home' onClick={(go)=>goto('/')}>Inicio</li>
                                <li  className='option-not-home' value="Smartphones">Tienda</li>
                                <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                                <li className='li-not-home'>Contactenos</li>
                              
                            </div>

                              
                        <div className="vista-contenedor-carrito-imagen-cantidad">
                                <h5 className="h5-carrito">{carrito?.length}</h5>
                                <div className="vista-icono-carrito">
                                  <img className="vista-icono-carrito" src={ShopingCart} alt="Cart"/>
                                </div>
                            </div>
                          
                            
                        </div>
                       )}
}

const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user,
        smartphones:state.smartReducer.smartphones,
        accessorios:state.accessReducer.accessorios
    }
}
export default connect(mapStateToProps)(Header);