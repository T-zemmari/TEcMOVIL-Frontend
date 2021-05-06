import React from 'react';
import './Lista-pedido.scss';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'


const ListaPedidos =(props)=>{

  const carrito = props.carrito;
  const user = props.user;


    return (

        <div className="lista-pedidos-container">

            <div className="tabla-lista-pedidos">
                <div className="titulo-tabla-pedido">
                   Este Es Tu Pedido - <strong>{user.name}</strong>
                </div>
                <div className="contenedor-lista-pedidos-mas-precio-final">
                    <div className ='lista-productos-eligidos'>

                    </div>
                </div>
            </div>

            

            <div className="Validar"></div>

            <Button variant="contained" color="primary">
                Validar compra
            </Button>

        </div>
    )
}

const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps)(ListaPedidos);