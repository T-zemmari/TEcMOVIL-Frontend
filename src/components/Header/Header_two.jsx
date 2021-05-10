import React ,{useEffect, useState} from 'react';
import './Header.scss';
import {useHistory} from 'react-router-dom';
import LoginRender from '../Modal/Login-render';
import Loading from '../Loading/Loading';
import axios from 'axios';
import ShopingCart from '../../img/shopping_cart-removebg-preview.png';
import {Avatar, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import ContactRender from '../Modal/Contact-render';



const Header = (props)=>{

    


 





}



const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user,
        smartphones:state.smartReducer.smartphones,
        accessorios:state.accessReducer.accessorios
    }
}
export default connect(mapStateToProps)(Header);