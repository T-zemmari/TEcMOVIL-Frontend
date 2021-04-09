
import React from 'react';
import { useState } from 'react';

import { Input } from 'antd';
import './Input.css';
import './FormInput.css';

const FormInput = (props) => {

    let CInput = Input;
    if (props.type) {
        CInput = Input[props.type];
    }

    let onChange = ()=>{};
    if(props.onChange) onChange = props.onChange;
    
    const [isActive, setIsActive] = useState(false);

    const handleTextChange = (key,value) => {
      
        if (value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        onChange(key,value);

    }

    useState(()=>{
        if (props.value) setIsActive(true);
    },[])
    
    return(
        <div className="formInput">
            <CInput value={props.value} name={props.name} onChange={(e) => handleTextChange(e.target.name,e.target.value)} maxLength={props.maxLength}/>
            <label htmlFor={props.name} className={ isActive ? "Active" : ""}>
                {props.label}
            </label>
        </div>
    )

}

export default FormInput;