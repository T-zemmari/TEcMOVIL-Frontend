import React from 'react';
import './Contact.scss';





 const Contact = () => {
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

            
        </div>
    )
}

export default Contact;
