import React from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Phone from '../../img/phone.jpg';

const useStyles = makeStyles((theme)=>({
        formControl : {
            margin :theme.spacing(1),
            minWidth:300
    }}))

const Presupuestos =()=>{

    // datos del usuario //

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    // hooks //

    const [marca,setMarca]=React.useState('')
    const [modelo,setModelo]=React.useState('')

    // functions //

    const classes= useStyles();

    const handelIt = (event)=>{

      setMarca(event.target.value)
      setModelo(event.target.value)
    }

    console.log(marca)



     
   

   if(credentials?.user.name){
   return (
       <>
       <Header style='logged-two'/>
      <div className="presupuestos-vista-container">
          soy presupuesto
      </div>
      </>
   )}else{
       return(
       <>
       
           <div className="vista-presupuesto-container">
            <Header style='repuestos'/>
            <div className="body-container-prepusupuesto">
                <div className="vista-imagen-promocional">
                    <img src="" alt=""/>
                </div>


                {/*.................Div seleccion de marca y modelo ---------------*/}

                <div className="vista-contenedor-marca-y-modelo">

                <div className="vista-marca-modelo-solo-texto">
                    Selecciona <span className="span-vista-presupuesto">Marca y Modelo</span>
                    
                </div>

                <div className="vista-modelos-y-marca-inputs">
                <div className="SelectInput">

                    <FormControl className={classes.formControl}>

                      
                        <Select labelID ='selected' id = 'Marcas' value ={marca} onChange={handelIt}>


                           <MenuItem value ='Alcatel' >Alcatel</MenuItem> 
                           <MenuItem value ='Samsung'>Samsung</MenuItem> 
                           <MenuItem value ='Xiaomi'>Xiaomi</MenuItem> 
                           <MenuItem value ='Iphone'>Iphone</MenuItem> 
                           <MenuItem value = 'Lg'>Lg</MenuItem> 
                           <MenuItem value = 'Sony'>Sony</MenuItem> 
                           <MenuItem value = 'Nokia'>Nokia</MenuItem> 

                        </Select>
                       </FormControl>

                       <FormControl className={classes.formControl}>

                      
                        <Select labelID ='select-demo' id = 'Modelos' value ={modelo} onChange={handelIt}>


                           <MenuItem value ='Alcatel' >Alcatel</MenuItem> 
                           <MenuItem value ='Samsung'>Samsung</MenuItem> 
                           <MenuItem value ='Xiaomi'>Xiaomi</MenuItem> 
                           <MenuItem value ='Iphone'>Iphone</MenuItem> 
                           <MenuItem value = 'Lg'>Lg</MenuItem> 
                           <MenuItem value = 'Sony'>Sony</MenuItem> 
                           <MenuItem value = 'Nokia'>Nokia</MenuItem> 

                        </Select>
                       </FormControl>
                </div>
                </div>



                </div>

                 {/*.................Div contenedor div imagen-croquis / div elegir tipo de reparacion----// ---------------*/}


                 <div className="vista-contenedor-div-croquis-div-reparaciones">

                      <div className="vista-div-imagen-croquis">
                          <div className="marca-y-modelo">
                             Modelo :   <strong> {marca}  {modelo}</strong>
                          </div>
                          <div className="separador-presupuesto"></div>
                          <img className ='imagen-style' src={Phone} alt="croquis"/>


                      </div>

                      <div className="vista-div-reparaciones">
                        <div className="no-enciende-ni-carga"><h2>No enciende / No Carga </h2></div>
                        <div className="vista-check"></div>

                        <div className="error-estetico"><h2>Daños estéticos / Roturas </h2></div>
                        <div className="vista-check"></div>

                        <div className="vista-div-problemas-de-audio"><h2>Problemas de audio </h2></div>
                        <div className="vista-check vista-audio-check">
                            <div className="tipo-averia-audio">
                               <div className="altavoz">Micrófono -</div>
                               <div className="speaker">Auricular speaker -</div>
                               <div className="altavoz-buzzer">Altavoz buzzer -</div>
                            </div>

                            
                        </div>

                        <div className="error-de-software"><h2>Reinstalacion de softwares </h2></div>
                        <div className="vista-check"></div>

                        <div className="no-enciende-ni-carga"><h2>Contacta con nosotros si no encuentras tu averia </h2></div>
                        <div className="vista-check"></div>

                      </div>


                 </div>



               </div>
           </div>
        </>
       )
           
       
   }
}

export default Presupuestos;