import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import Login from '../../Containers/Login/Login';
import './Login-render.scss';



function LoginRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    
   
    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                  <Login></Login>
                </Modal>
        </div>
    )
}

export default LoginRender;