import React, { useEffect, useState } from 'react';
import './Lista-Mis-Compras.scss';
import calidad from '../../img/Quality.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';





const ListaMisCompras = (props) => {


    const [misCompras, setMisCompras] = useState([])
    const user = props.user;
    const token = props.token;

    useEffect(async () => {

        let dataFromDb = await axios.get(`http://localhost:3002/orders/${user._id}/my-orders/`, { headers: { 'authorization': 'Bearer ' + token } })
        setMisCompras(dataFromDb.data.ordersFiltred)

    }, [])

    let array = [];
    misCompras?.map(misCompras => {
        array.push(misCompras)
    })




    return (

        <>
            <Header style='register' />
            <div className="contenedor-lista-mis-compras">
                <div className="cesta-en-mis-compras">
                    {array?.map((item, id) =>




                        <div className="vista-cesta-container" key={id}>


                            <div className="contenedor-precio-titulo-carrito">
                                <div className="titulos-carrito">
                                    Datos de Tu pedido
     </div>

                                <div className="precio">Precio</div>
                            </div>


                            <div className="separador-cart"></div>

                            <div className="contenedor-imagen-titulo-articulo-precio">

                                <div className="vista-imagen-productos">
                                    <img className="vista-imagen-productos" src={item.product[0].imgUrl} alt={item.product[0].name} />
                                </div>

                                <div className="vista-nombre-productos">
                                    {item.product[0].name}
                                </div>

                                <div className="precio-unidad">
                                    {item.product[0].price}
                                </div>

                            </div>





                        </div>





                    )}
                </div>
            </div>

            {<footer className='footer-special-presupuesto'>
                <div className="footer-container">
                    <div className="vista-sobre-nosotros">
                        Enlaces de interes
                                         <div>Envios</div>
                        <div>Repuestos</div>
                        <div>Accesorios</div>
                        <div>Telefonos nuevos y de segunda mano</div>
                        <div>Copyright TEcMovil</div>

                    </div>
                    <div className="vista-sobre-nosotros">
                        Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="vista-sobre-nosotros">

                        <div className='calidad'>
                            <img className='calidad' src={calidad} />
                        </div>

                    </div>

                </div>
            </footer>}

        </>

    )
}

const mapStateToProps = (state) => {

    return {

        user: state.userReducer.user,
        token: state.userReducer.token
    }
}



export default connect(mapStateToProps)(ListaMisCompras);