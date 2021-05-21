
import React from 'react';

import { useHistory } from 'react-router-dom';

const CTAButton = (props) => {

    let history = useHistory();

    const styling = 'CTAButton ' + (props.styling || 'CTA');

    const route = () => {
        history.push(`/${props.goto}`);
    }

    let onClick = () => route();
    if (props.onClick) onClick = props.onClick;

    return (
        <button onClick={onClick} className={styling}>
            {props.text}
        </button>
    )
}

export default CTAButton;