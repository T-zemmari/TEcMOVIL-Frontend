import React from 'react';
import './Contact.scss';
import Button from '@material-ui/core/Button'





 const Contact = () => {


    const subbmit=()=>{


        alert('Gracias Por contactar con nosotros, en breve nos pondremos en contacto contigo')
    }
    return (
        <div className='Contact-container'>

            <div className="Titulo-contact-form">
                Por Favor rellene el formulario 
            </div>

            <input className ='input-style-contact-form' type="text" placeholder='Escriba Su nombre'/>
            <input className ='input-style-contact-form' type="text" placeholder='Escriba Su email'/>
            <input  className ='input-style-contact-form' type="text" placeholder='Marca De Du Dispositivo'/>
            <input  className ='input-style-contact-form'type="text" placeholder='Modelo De Su Dispositivo'/>
            <textarea className ='textarea-style-contact-form' id="info" name="info" rows="4" cols="50"/>
            <Button variant="outlined" color="secondary" onClick={()=>subbmit()}>
                  Enviar Formulario
            </Button>
            
        </div>
    )
}

export default Contact;
