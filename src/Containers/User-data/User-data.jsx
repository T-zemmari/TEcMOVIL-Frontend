
import {useHistory} from 'react-router-dom';
import axios from "axios";
import checkError from '../../tools/My-tools';
import { connect } from 'react-redux';
import {UPDATE_USER} from '../../Redux/Types';
import Header from '../../components/Header/Header';
import './User-data.scss';
import React, { useCallback, useEffect, useState } from "react";
import validate from "../../tools/validate";
import CTAButton from "../../components/CTAButton/CTAButton";
import FormInput from "../../components/FormInput/FormInput";
import { Form } from 'antd';
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import visa from '../../img/visa.jpg';
import Button from '@material-ui/core/Button'
import { Footer } from 'antd/lib/layout/layout';
import { RestorePageOutlined } from '@material-ui/icons';


const UserData = (props) => {

    let history = useHistory();
    let credentials = JSON.parse(localStorage.getItem('credentials'));
    console.log(credentials)

    const [user, setUser] = useState({

        name: "",
        lastname: "",
        phone: "",
        adress: "",
        born: "",
    
        })
    
        const [creditcard,setCreditCard]=useState({
            nombre_tarjeta:'',
            Numero_de_laTarjeta:'',
            Fecha_expiracion:'',
            Cvc:''
        });
        console.log(creditcard)
        console.log(creditcard.Numero_de_laTarjeta)



  const [message, setMessage] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Manejar el estado

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
    if (Object.keys(errors).length > 0) setErrors(validate({ ...user, [key]: value }, "register"));
  };

  const handel_creditCard = (ev)=>{
    setCreditCard({...creditcard,[ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
}
  
  console.log(credentials?.user._id)

  let endpointUser = `http://localhost:3002/users/`;
  

  // Envio de datos del registro

  const envioData = async () => {
    const errs = validate(user, "register");
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    let userData = {
        id: credentials?.user._id,
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        adress: user.adress,
        born: user.born,
        payment :creditcard
       
    };
    console.log(userData)

   

    let response = await axios.put(endpointUser,userData);
    console.log(response.data)
    setTimeout(() => {
        setLoading(false)
      alert('Usuario Modficado Con Exito'); 
      history.push('/myspace');
      
    }, 1500);
    

    setLoading(true)
   
}


 

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        envioData();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [user]);

    if (!props.token) {
        setTimeout(()=>{
            history.push('/');
        },2000);
        
        return(
            <div className="container-gif">
                <div className="gif">
                    <Loading/>
                </div>
            </div>
        );
     };
    
    return (
        <>
    

       <Header style ='register'></Header>
      <Loading visible={loading}></Loading>

      <div className="contenedor-update-user-and-payment">
          <div className="contenedor-update-data-user">

      <div className="registerContainer">
      
        {message}
        <div className="registerForm">
            <h2>Modifica Tus Datos Rellenando Este Formulario</h2>
        

            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.name?.status} help={errors.name?.help}>
                    <FormInput label={credentials.user?.name} name="name"   onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.lastname?.status} help={errors.lastname?.help}>
                    <FormInput label={credentials.user?.lastname} name="lastname" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer">
                <Form.Item validateStatus={errors.address?.status} help={errors.address?.help}>
                    <FormInput label={credentials.user?.adress} name="address" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.phone?.status} help={errors.phone?.help}>
                    <FormInput label={credentials.user?.phone} name="phone" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.born?.status} help={errors.born?.help}>
                    <FormInput label={credentials.user?.born} name="born" onChange={updateUser} />
                </Form.Item>
            </div>
            
           
            
        </div>
      </div>

      </div>
      <div className="update-payment">

          <div className="tarjeta-de-credito">

              {/*<div className="imagen-tarjeta-de-credito">
                  <img className="imagen-tarjeta-de-credito" src={visa} />
    </div>*/}
              <div className="formulario-tarjeta">

                  Numero de la tarjeta
                  <input className='input-form-tarjeta' name ='Numero_de_laTarjeta' type="text"placeholder={credentials.user.payment?.Numero_de_laTarjeta} onChange={handel_creditCard}/>

                  Nombre
                  <input className='input-form-tarjeta' name='nombre_tarjeta' type="text"placeholder={credentials.user.payment?.nombre_tarjeta} onChange={handel_creditCard}/>

                  <div className="fecha-de-expiracion">

                  <div className="contendor-fecha">
                  Fecha de Expiracíon
                  <input className='input-form-tarjeta-fecha' name='Fecha_expiracion' type="text"placeholder={credentials.user.payment?.Fecha_expiracion} onChange={handel_creditCard}/>
                 </div>
                 <div className="contendor-CVC" >
                  CVC 
                  <input  className='input-form-tarjeta-fecha' name='Cvc' type="text" placeholder={credentials.user.payment?.CVC} onChange={handel_creditCard}/>
                  </div>
                  </div>
                  <Button variant="contained" color="primary" onClick={() => envioData()}>
                    Envia Los Datos
                  </Button>
              </div>

          </div>
          
      </div>
      <div className="footer"><Footer/></div>
      </div>

    </>
    );
}
const mapStateToProps =state =>{
    return{
      user : state.userReducer.user,
      token : state.userReducer.token
    }
  };
  
export default connect(mapStateToProps)(UserData);