import React from 'react';
import {useState, useEffect} from 'react';


const Message = (props)=>{

    let style = 'messageContainer ';
    if (props.style) style += props.style;
    else style += 'error';

    const [classes, setClasses] = useState('message');
    const [message, setMessage] = useState();
    
    useEffect(()=>{
        if (props.text !== message) {
            setClasses('message');
            setMessage(props.text);
            setClasses('message visible');
            setTimeout(()=>{setClasses('message');},4000);
            setTimeout(()=>{
                setClasses('message hidden');
            },5000);
            return;
        }
    });


    return(
            <div className={style}>
                
                <div className={classes}>{message}</div>
            
            </div>
    )
}

export default Message;