import React from 'react';
import './Lista-pedido.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CLEAN_CARRITO } from '../../Redux/Types';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router';

const ListaPedidos = (props) => {

    const carrito = props.carrito;
    const user = props.user;
    const token = props.token;

    let history = useHistory();

    const cleanCart = () => {

        props.dispatch({ type: CLEAN_CARRITO, payload: [] })
    }

    // Estado de la peticion 



    let arrayPrecios = []

    carrito.map(elemento => arrayPrecios.push(elemento.price))
    carrito.map(elemento => {
        if (!elemento?.pantalla) {
            return;
        }
        else {

            arrayPrecios.push(elemento?.pantalla)
        }
    });

    carrito.map(elemento => {
        if (!elemento?.priceWithIva) {
            return;
        }
        else {

            arrayPrecios.push(elemento?.priceWithIva)
        }
    });


    const arrayParaLasuma = []
    arrayPrecios.forEach((numero) => {

        if (numero !== undefined) {
            arrayParaLasuma.push(numero)

        }

    });

    let suma = 0;
    let precioTotal = arrayParaLasuma.forEach((numero) => {
        return suma += parseInt(numero)
    })




    let orderData = {

        userId: user._id,
        precio_total: precioTotal,
        product: carrito,
        payment: user.payment
    }



    const sendOrderToDb = async () => {



        let response = await axios.post(`http://localhost:3002/orders/${user._id}/my-orders`, orderData, { headers: { 'authorization': 'Bearer ' + token } });
        if (response.status === 200) {
            alert('Tu compra se ha relizado con exito,Revisala En  Mis compras');
            history.push('/mis-compras')
            cleanCart()
        } else {
            alert('no se ha podido realizar la compra, porfavor intentalomas tarde');
            history.push('/tienda')
        }

    }




    return (
        <>

            <Header style='register' />


            <div className="lista-pedidos-container">

                <div className="tabla-lista-pedidos">
                    <div className="titulo-tabla-pedido">
                        Este Es Tu Pedido - <strong>{user.name}</strong>
                    </div>
                    <div className="contenedor-lista-pedidos-mas-precio-final">
                        <div className='lista-productos-eligidos'>
                            <Button variant="outlined" color="default">
                                Lista De Productos
                    </Button>

                        </div>

                        <div className="lista-detallada-de-productos">
                            {carrito.map((element, _id) => (<div key={_id}>

                                <div className="nombre-del-producto">
                                    --Producto : {element.name} {element.marca}
                                </div>
                                <div className="precio-por-unidad">
                                    --Precio /Unidad  : {element.price} {element.priceWithIva} {element.pantalla}
                                </div><br />



                            </div>))}
                        </div>
                        <div className="precio-total-productos">
                            Precio Total : <strong>{suma} Euros</strong>
                        </div>

                    </div>

                    <div className="datos-envio-y-pago">

                        <div className="datos-de-pago">


                            <div className="datos tarjeta-credito">
                                Pago Con Tarjeta Registrada Numero: <br />
                               Tarjeta: <strong>MasterCard</strong>  <br />
                               A Nombre de : <strong>{user.payment?.nombre_tarjeta}</strong><br />
                               Numero: <strong>{user.payment?.Numero_de_laTarjeta}</strong><br />

                            </div>

                        </div>


                        <div className="datos-env">
                            Nombre : <strong>{user.name}</strong> <br />
                          Direccion del envio : <strong>{user.adress}</strong> <br />
                          Telefono:  <strong>{user.phone} </strong><br />
                          horario De Entrega :   <strong>Sevicio 24h</strong> <br />

                        </div>

                    </div>
                </div>



                <div className="Validar">

                    <Button variant="contained" color="primary" onClick={() => sendOrderToDb()}>
                        Validar compra
            </Button>

                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => {

    return {
        carrito: state.carritoReducer.carrito,
        user: state.userReducer.user,
        token: state.userReducer.token
    }
}


export default connect(mapStateToProps)(ListaPedidos);