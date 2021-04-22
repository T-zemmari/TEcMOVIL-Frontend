import React ,{useState} from 'react';
import './Header.scss';
import {useHistory} from 'react-router-dom';
import LoginRender from '../Modal/Login-render';
import Loading from '../Loading/Loading';
//import Avatar from '@material-ui/core/Avatar';
import {Avatar} from '@material-ui/core';

const Header =(props)=>{

  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const goto =(go)=>{
   history.push(go)
  }

  let credentials = JSON.parse(localStorage.getItem('credentials'));
  console.log(credentials)

  const Logout=()=>{
    
    let confirm = window.confirm('Seguro que quieres salir ??');

    if(confirm){

        setTimeout(() => {
            localStorage.removeItem('credentials');
            setLoading(true);
            history.push('/');
          }, 1000);
    }
      
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
            <LoginRender>
                <div className='vista-login' >Entrar</div>
            </LoginRender>
            
        </div>
    </div>
   )
        }if(props.style === 'register'){
            return(

    
                <div className="header-container-not-home">
                    <div className="vista-logo" onClick={(go)=>goto('/')}>TEcMovil</div>
                    <div className="vista-nav">
                        
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
        }if(props.style === 'logged'){
            return(
                
                <><Loading/>
                <div className="header-container-home-user-logged">
                    <div className="vista-logo" onClick={()=>Logout()}>TEcMovil</div>
                    <div className="vista-nav">
     
                        <select  className='select-not-home' name="Tienda" id="">
                        <option  className='option-not-home' value="Smartphones">Smartphones</option>
                        <option  className='option-not-home'value="Tablets">Tablets</option>
                        <option  className='option-not-home'value="Accesorios">Accesorios</option>
                        </select>
                        
                        <li className='li-not-home'>Repuestos</li>
                        <li className='li-not-home'>Presupuestos</li>
                       
                        
                        </div>
                        <div className="vista-user-logged">
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
                        {credentials.user?.name[0]}</Avatar>
                        
                        <h4 className="h4-vista-logged">Hola {credentials.user?.name}</h4>
                        </div>
                        
                        
                        
                         
                   
                       
                </div>
                </>
               )
               
            }
}

export default Header;