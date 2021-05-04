import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import Contact from '../Contact/Contact';



function ContactRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                 <Contact></Contact>
                </Modal>
        </div>
    )
}

export default ContactRender;