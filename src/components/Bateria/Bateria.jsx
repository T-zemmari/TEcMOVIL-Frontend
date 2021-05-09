import React from 'react';
import './Bateria.scss';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router';


const Bateria =({imgUrl,image2,price,onClick,Model})=>{

      let histior = useHistory();


    return(


        <div className="vista-container-baterias">


              <img className='vista-image-bateria' src={imgUrl} alt={Model} />
              <div className="vista-name-bateria"><strong>{Model}</strong> </div>
              <div className="vista-price-bateria">  <strong>{price}</strong> </div>
              <Button variant="outlined" color="primary" onClick={onClick}>
                Lo quiero
              </Button>


        </div>
    )
}


export default Bateria;