import React from 'react';
import { useHistory } from 'react-router';
import Cesta from '../Cesta/Cesta';
import './Cart.scss';
import { connect } from 'react-redux';
import { CLEAN_CARRITO, REMOVE_FROM_CARRITO } from '../../Redux/Types';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button'
import imagenUno from '../../img/recogida-en-una-hora.jpg';
import imagenDos from '../../img/garantia.jpg';
import imagenTres from '../../img/devolucion.jpg';
import imagenCuatro from '../../img/financia.jpg';
import imgCarrito from '../../img/shopping_cart-removebg-preview.png';


const Cart = (props) => {

    let history = useHistory();
    const carrito = props.carrito;

    const removeItem = (index) => {

        props.dispatch({ type: REMOVE_FROM_CARRITO, payload: index })
    }

    const cleanCart = () => {

        props.dispatch({ type: CLEAN_CARRITO, payload: [] })
    }


    let credentials = JSON.parse(localStorage.getItem('credentials'));



    let array = [];
    let suma = 0;
    carrito.map(elemento => array.push(elemento.price))
    carrito.map(elemento => {
        if (!elemento?.pantalla) {
            return;
        }
        else {

            array.push(elemento?.pantalla)
        }
    });

    carrito.map(elemento => {
        if (!elemento?.priceWithIva) {
            return;
        }
        else {

            array.push(elemento?.priceWithIva)
        }
    });



    const arrayParaLasuma = []
    array.forEach((numero) => {

        if (numero !== undefined) {
            arrayParaLasuma.push(numero)

        }

    });

    let precioTotal = arrayParaLasuma.forEach((numero) => {
        suma += parseInt(numero)
    })


    let precioAhorro = (suma * 10 / 100);



    if (!credentials?.user.name) {


        history.push('/')
        window.location.reload()


    } else {


        return (
            <>
                <Header style='logged-two' />

                <div className="contenedor-global-cart">

                    <div className="contenedor">

                        {/*<h1 className='h1-style-cart'>TU CARRITO</h1>*/}
                        <div className="vista-cart-container">
                            {carrito.map((carrito, index) => <Cesta key={carrito._id} {...carrito} removeItem={() => removeItem(index)} />)}


                        </div>

                        <div className="tu-carrito-final-container">



                            <div className="datos-carrito-a-pagar">
                                <div className="titulo-tu-carrito">
                                    <h2 className="tu-carrito-final-titulo">
                                        <div className="icono-cesta">
                                            <img className="icono-cesta" src={imgCarrito} alt='img' />
                                        </div>
                 TU CARRITO
             </h2>
                                </div>

                                <div className="total-articulos">
                                    <div className="carrito-dividir">
                                        <div className="total-articulos-cart-titulo"> Total de articulos (canon inlcuido)</div>
                                        <div className="total-articulos-cart-titulo"><strong>{suma} €</strong></div>
                                    </div>
                                    <div className="carrito-dividir">
                                        <div className="total-articulos-cart-precio"> Gastos de envio</div>
                                        <div className="total-articulos-cart-precio-gratis"> Gratis</div>
                                    </div>
                                </div>
                                <div className="ultimo-div-precio-total-a-pagar">
                                    <div className="carrito-dividir">
                                        <div className="total-articulos-cart-precio"><strong>Total</strong> {precioTotal} (IVA incluido)</div>
                                    </div>
                                    <div className="segundo-carrito-dividir">
                                        <div className="total-articulos-cart-precio"> <strong>{suma} €</strong></div>
                                        <div className="te-ahorras-cantidad"> Te has ahorrado --
                 {precioAhorro} €
                 </div>
                                    </div>


                                </div>

                            </div>

                        </div>



                        <div className="order">

                            <Button variant="contained" color="secondary" onClick={() => history.push('/lista-pedidos')}>
                                Hacer el pedido
           </Button>
                            <Button variant="contained" color="secondary" onClick={() => cleanCart()}>
                                Vaciar Carrito
           </Button>

                        </div>

                        <div className="mas-info-de-nuestra-app">

                            <div className="imagen-promo">
                                <img className="imagen-promo" src={imagenUno} alt='img' />
                            </div>

                            <div className="imagen-promo">
                                <img className="imagen-promo" src={imagenDos} alt='img' />
                            </div>

                            <div className="imagen-promo">
                                <img className="imagen-promo" src={imagenTres} alt='img' />
                            </div>

                            <div className="imagen-promo">
                                <img className="imagen-promo" src={imagenCuatro} alt='img' />
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        carrito: state.carritoReducer.carrito,
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Cart);