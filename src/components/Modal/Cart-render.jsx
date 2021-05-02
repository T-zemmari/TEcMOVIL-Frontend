import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import Cart from '../../components/Cart/Cart';




function CartRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                  <Cart></Cart>
                </Modal>
        </div>
    )
}

export default CartRender;