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

const useStyles = makeStyles((theme)=>({
        formControl : {
            margin :theme.spacing(1),
            minWidth:300
    }}))

const Presupuestos =()=>{

    // datos del usuario //

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    // hooks //

    const [value,setValue]=React.useState('')

    // functions //

    const classes= useStyles();

    const handelIt = (event)=>{

      setValue(event.target.value)
    }

    console.log(value)



     
   

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

                      
                        <Select labelID ='selected' id = 'Marcas' value ={value} onChange={handelIt}>


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

                      
                        <Select labelID ='select-demo' id = 'Modelos' value ={value} onChange={handelIt}>


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
               </div>
           </div>
        </>
       )
           
       
   }
}

export default Presupuestos;