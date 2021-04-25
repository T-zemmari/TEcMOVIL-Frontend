import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import ProductProfile from '../../Containers/Product-Profile/Product-Profile';




function ProductProfileRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                  <ProductProfile></ProductProfile>
                </Modal>
        </div>
    )
}

export default ProductProfileRender;