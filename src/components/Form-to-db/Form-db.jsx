import React, { useState } from 'react';
import './Form-db.scss';
import Button from '@material-ui/core/Button'
import axios from 'axios';


const FormDB = (props) => {


    const [smartphone, setSmarphone] = useState({


        name: '',
        pantalla: '',
        color: '',
        price: '',
        rate: '',
        imgUrl: '',
        image2: '',
        description: ''

    })

    const handeler = (e) => {
        setSmarphone({ ...smartphone, [e.target.name]: e.target.value })
    }
    console.log(smartphone)


    let Data = {

        name: smartphone.name,
        pantalla: smartphone.pantalla,
        color: smartphone.color,
        price: smartphone.price,
        rate: smartphone.rate,
        description: smartphone.description,
        imgUrl: smartphone.imgUrl,
        image2: smartphone.image2


    }

    const sendData = async () => {

        let response = await axios.post('http://localhost:3002/products', Data)

        console.log(response)
        if (response) {

            alert('Los datos han sido recibidos en la base de datos.')
        }


    }




    return (

        <div className='vista-form-container'>

            <div className='vista-añadir-info-texto'>

                <input className='inputs-form-admin' type="text" name='name' placeholder='Name' onChange={handeler} />
                <input className='inputs-form-admin' type="text" name='pantalla' placeholder='Pantalla' onChange={handeler} />
                <input className='inputs-form-admin' type="text" name='color' placeholder='Color' onChange={handeler} />
                <input className='inputs-form-admin' type="text" name='price' placeholder='Price' onChange={handeler} />
                <input className='inputs-form-admin' type="text" name='rate' placeholder='Rate' onChange={handeler} />
                <input className='inputs-form-admin description-form' type="text" name='description' placeholder='Description' onChange={handeler} />

            </div>

            <div className='vista-añadir-imagenes'>

                <input className='inputs-form-admin-image' type="file" name='imgUrl' placeholder='imgURl' onChange={handeler} />

                <input className='inputs-form-admin' type="file" name='image2' placeholder='Image2' onChange={handeler} />
                <div className="boton-admin-form">
                    <Button variant="contained" color="secondary" onClick={() => sendData()}>
                        Registrar Los Datos
            </Button>
                </div>
            </div>




        </div>
    )
}

export default FormDB