
import React from 'react';
//import { useState } from 'react';

import { Spin } from 'antd';
import './Spin.css';
import './Loading.css';

const Loading = (props) => {

    let classes = 'loadingContainer ';
    if (props.visible) classes += 'visible';
    
    return(
        <div className={classes}>
            <Spin size="large"></Spin>
        </div>
    )

}

export default Loading;