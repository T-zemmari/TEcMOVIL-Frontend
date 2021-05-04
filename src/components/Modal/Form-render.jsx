import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import FormForDB from '../../components/Form-to-db/Form-db';





function FormRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                  <FormForDB></FormForDB>
                </Modal>
        </div>
    )
}

export default FormRender;