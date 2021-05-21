import React from 'react';
import './Contact.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';



const Contact = (props) => {

    let history = useHistory()

    let user = props.user;

    const subbmit = () => {


        alert('Gracias Por contactar con nosotros, en breve nos pondremos en contacto contigo');
        history.push('/myspace')
    }
    return (
        <div className='Contact-container'>

            <div className="Titulo-contact-form">
                Por Favor rellene el formulario
            </div>

            <input className='input-style-contact-form' type="text" placeholder={user.name} />
            <input className='input-style-contact-form' type="text" value={user.email} placeholder={user.emai} />
            <input className='input-style-contact-form' type="text" placeholder='Marca De Du Dispositivo' />
            <input className='input-style-contact-form' type="text" placeholder='Modelo De Su Dispositivo' />
            <textarea className='textarea-style-contact-form' id="info" name="info" rows="4" cols="50" placeholder='¿En que podemos ayudarte?' />
            <Button variant="outlined" color="secondary" onClick={() => subbmit()}>
                Enviar Formulario
            </Button>

        </div>
    )
}

const mapStateToProps = (state) => {

    return {

        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Contact);
