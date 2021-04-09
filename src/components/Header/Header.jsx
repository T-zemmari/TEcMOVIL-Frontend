import React from 'react';
import './Header.scss';
import {useHistory} from 'react-router-dom';

const Header =(props)=>{

  let history = useHistory();
  const goto=(props)=>{
    
    history.push('/register')
    
  }
if(props.style === 'home'){
   return(

    
    <div className="header-container">
        <div className="vista-logo" onClick={()=>history.push('/')}>TEcMovil</div>
        <div className="vista-nav">
            <li className='li-home'>Inicio</li>
            <li className='li-home'>Tienda</li>
               
            {/*<select name="Tienda" id="">
            <option value="Smartphones">Smartphones</option>
            <option value="Tablets">Tablets</option>
            <option value="Accesorios">Accesorios</option>
            </select>*/}
            
            <li className='li-home'>Repuestos</li>
            <li className='li-home'>Presupuestos</li>
            <li className='li-home'>Contactenos</li>
            <div className='vista-login' onClick={()=>goto()}>Entrar</div>
        </div>
    </div>
   )
        }else{
            return(

    
                <div className="header-container-not-home">
                    <div className="vista-logo" onClick={()=>history.push('/')}>TEcMovil</div>
                    <div className="vista-nav">
                        <li className='li-not-home' onClick={()=>history.push('/')}>Inicio</li>
                        <li className='li-not-home'>Tienda</li>
                           
                        <select  className='select-not-home' name="Tienda" id="">
                        <option  className='option-not-home' value="Smartphones">Smartphones</option>
                        <option  className='option-not-home'value="Tablets">Tablets</option>
                        <option  className='option-not-home'value="Accesorios">Accesorios</option>
                        </select>
                        
                        <li className='li-not-home'>Repuestos</li>
                        <li className='li-not-home'>Presupuestos</li>
                        <li className='li-not-home'>Contactenos</li>
                      
                    </div>
                </div>
               )
        }
        
}

export default Header;