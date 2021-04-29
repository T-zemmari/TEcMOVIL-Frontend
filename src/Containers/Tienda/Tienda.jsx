import React, { useEffect, useState } from 'react';
import './Tienda.scss';
import Header from '../../components/Header/Header';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Product from '../../components/Products/Product';
import { useHistory } from 'react-router';





const Tienda = (props)=>{

    let history = useHistory();

    const [phones,setPhones]=useState([]);


    useEffect(async()=>{

         let response_for_phones = await axios.get('http://localhost:3002/products');
         setPhones(response_for_phones.data);
    },[])

    let credentials = localStorage.getItem('credentials');
    let smartphones = localStorage.getItem('phones');
    let accessories = localStorage.getItem('allAccessories');
    console.log(phones);


    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };
     



   if(!credentials?.user.name){
    return (
        <>
        <Header  style ='register'/>
        <div className="vista-Container-Tienda">

            <div className="nav-bar-container">
           
             <Button variant="contained" color="secondary">
                 Smartphones 
             </Button>
             <Button variant="contained" color="secondary">
                 Accesorios 
             </Button>
             <Button variant="contained" color="secondary">
                 Xiaomi
             </Button>
             <Button variant="contained" color="secondary">
                 Samsung
             </Button>
             <Button variant="contained" color="secondary">
                 Iphone
             </Button>



            </div>

          <div className="vista-contenedor-telefonos-repuestos-accessorio">

              <div className="vista-todos-los-Smartphones">
                  {phones.map(phones => <Product key={phones._id}{...phones} tamaño = 'normal' onClick={()=>GetProductInfo(phones)}/>)}
              </div>
              <div className="vista-todos-los-accessorios">

              </div>

          </div>

        </div>
        </>
    )
}



}

export default Tienda;