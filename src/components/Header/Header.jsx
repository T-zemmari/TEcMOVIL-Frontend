import React ,{useEffect, useState} from 'react';
import './Header.scss';
import {useHistory} from 'react-router-dom';
import LoginRender from '../Modal/Login-render';
import Loading from '../Loading/Loading';
import axios from 'axios';
//import Avatar from '@material-ui/core/Avatar';
import {Avatar, Button, ClickAwayListener} from '@material-ui/core';

const Header = (props)=>{

  const [loading, setLoading] = useState(false);
  const [selectProducts ,setSelectProducts]= useState('');
  const [smartPhones ,setSmartphones]= useState([]);
  const [accessorios ,setAccessorios]= useState([]);

  let history = useHistory();

  const goto =(go)=>{
   history.push(go)
 
  }

 
  console.log(selectProducts)

  const getPhones=async()=>{

 if(selectProducts === 'Accesorios'){
  let response_for_smartphones = await axios.get('http://localhost:3002/products');
  setSmartphones(response_for_smartphones.data)
  localStorage.setItem('phones',response_for_smartphones.data);
}
  }
 // getPhones();
 

 useEffect(async()=>{
    if(selectProducts === 'Smartphones'){
        let response_for_smartphones = await axios.get('http://localhost:3002products');
        setSmartphones(response_for_smartphones.data)
        localStorage.setItem('phones',response_for_smartphones.data);

 }},[]) 
 
  console.log(smartPhones)
  console.log(accessorios)
  
  



  let credentials = JSON.parse(localStorage.getItem('credentials'));
  console.log(credentials)

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
   



if(props.style === 'home' ){
   return(

    
    <div className="header-container">
        <Loading visible={loading}></Loading>
        <div className="vista-logo" onClick={()=>history.push('/')}>TEcMovil</div>
        <div className="vista-nav">
           
            <li className='li-home' onClick={()=>history.push('/tienda')}>Tienda</li>
        
            
            <li className='li-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
            <li className='li-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
            <li className='li-home'>Contactenos</li>
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
                        
                      
                           
                        <select  className='select-not-home' name="Tienda" id="Tienda"  const onChange = {(e)=>{
      const selectedProduct = e.target.value;
      setSelectProducts(selectedProduct);

  }}>
                        <option  className='option-not-home' value="Tienda"onClick={(go)=>goto('/tienda')}>Tienda</option>
                        <option  className='option-not-home' value="Smartphones" >Smartphones</option>
                        <option  className='option-not-home'value="Accesorios" >Accesorios</option>
                        </select>
                        
                        <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                        <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                        <li className='li-not-home'>Contactenos</li>
                      
                    </div>
                </div>
               )
}if(props.style === 'Admin' ){
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
                    <div className="vista-logo"  >TEcMovil</div>
                    <div className="vista-nav">
     
                        <select  className='select-not-home' name="Tienda" id="">
                        <option  className='option-not-home' value="Smartphones">Smartphones</option>
                        <option  className='option-not-home'value="Tablets">Tablets</option>
                        <option  className='option-not-home'value="Accesorios">Accesorios</option>
                        </select>
                        
                        <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                        <li className='li-not-home'onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                       
                        
                        </div>
                        <div className="vista-user-logged">
                          
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
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
         
                            <select  className='select-not-home' name="Tienda" id="">
                            <option  className='option-not-home' value="Smartphones">Smartphones</option>
                            <option  className='option-not-home'value="Tablets">Tablets</option>
                            <option  className='option-not-home'value="Accesorios">Accesorios</option>
                            </select>
                            
                            <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                            <li className='li-not-home'onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                           
                            
                            </div>
                            <div className="vista-user-logged">
                              
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
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
                               
                            <select  className='select-not-home' name="Tienda" id="">
                            <option  className='option-not-home' value="Smartphones">Smartphones</option>
                            <option  className='option-not-home'value="Tablets">Tablets</option>
                            <option  className='option-not-home'value="Accesorios">Accesorios</option>
                            </select>
                            
                            
                            <li className='li-not-home' onClick={(go)=>goto('/presupuestos')}>Presupuestos</li>
                            <li className='li-not-home'>Contactenos</li>
                          
                        </div>
                    </div>)
}if(props.style === 'presupuestos' ){
                    return(
        
            
                        <div className="header-container-not-home">
                            <Loading visible={loading}></Loading>
                            <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
                            <div className="vista-nav">
                                
                                <li className='li-not-home' onClick={(go)=>goto('/')}>Inicio</li>
                                   
                                <select  className='select-not-home' name="Tienda" id="">
                                <option  className='option-not-home' value="Smartphones">Smartphones</option>
                                <option  className='option-not-home'value="Tablets">Tablets</option>
                                <option  className='option-not-home'value="Accesorios">Accesorios</option>
                                </select>
                                
                                
                                <li className='li-not-home' onClick={(go)=>goto('/repuestos')}>Repuestos</li>
                                <li className='li-not-home'>Contactenos</li>
                              
                            </div>
                        </div>
                       )}
}

export default Header;