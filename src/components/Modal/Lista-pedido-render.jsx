import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import ListaPedidos from '../../components/Lista-Pedido/Lista-pedido';





function ListaPedidodRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                  <ListaPedidos></ListaPedidos>
                </Modal>
        </div>
    )
}

export default ListaPedidodRender;