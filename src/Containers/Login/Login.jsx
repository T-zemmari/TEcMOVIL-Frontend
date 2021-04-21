import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validate from '../../tools/validate';
import FormInput from '../../components/FormInput/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Form } from 'antd';
import axios from 'axios';
import './Login.scss';


const Login = (props) => {

    let history = useHistory();
   

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [messaje, setMessage] = useState('');
    const [errors, setErrors] = useState({});


  
   

    const handler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const sendData = async () => {

        setMessage('');

        let notValidated = validate(credentials)
        setMessage(notValidated);

        if (notValidated) {
            return;
        }
        
        let credentialsData = {
            email: credentials.email,
            password: credentials.password
        };

        let response = await axios.post('http://localhost:3002/users/login', credentialsData);

        if (response) {
            console.log(response);

            localStorage.setItem('token', response.data.jwt.jwt)
            localStorage.setItem('user', JSON.stringify(response.data.jwt.user));

            let token = localStorage.getItem('token');
            let user = JSON.parse(localStorage.getItem('user'));

            console.log(user);
            console.log(token);

            //props.dispatch({ type: LOGIN, payload: response.data });

            setTimeout(() => {
                history.push('/home')
            }, 1000);

        } else {
            setMessage('Sus credenciales son erroneos, comprueba su email o contraseña');
            setMessage('');
            alert('Sus credenciales son erroneos, comprueba su email o contraseña');
        }
    }

    return (
        <div>

                <div className="login-render-container">
                    <h2 className="login-render-h2">Login</h2><br/>
                    
                    <input  className="input-login" tipo="text" placeholder="Escribe tu Email" label="email" name="email" onChange={handler} /><br/><br/>
                
                  
                    <input tipo="password" className="input-login" placeholder="Escribe tu Contraseña" label="password" name="password" onChange={handler} /><br/><br/>
                
                   {messaje}
                   
                   <div className='vista-login' onClick={()=>sendData()}>Entrar</div>
                   <div className="goggleRegister">
                   <div className="button-login button-login-facebook">
                            <FontAwesomeIcon icon={faGoogle} className='button-login-icon' />
                            <em className='button-login-letter'>Google</em>
                        </div>
                   <div className="vista-register-login" onClick={()=>history.push('/register')}>¿Aún no estas registrado?</div>
                   </div>
                </div>
        </div>
    )
};



export default Login;