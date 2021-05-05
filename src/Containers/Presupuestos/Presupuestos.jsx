import React, { useEffect } from 'react';
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
import {connect} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
import ContactRender from '../../components/Modal/Contact-render';
import { Footer } from 'antd/lib/layout/layout';
import FooterDos from '../../Footer-dos/Footer';


const useStyles = makeStyles((theme)=>({
        formControl : {
            margin :theme.spacing(1),
            minWidth:300
    }}))

const Presupuestos = (props)=>{

   let datosDelUsuario = props.user;
  
   let datosSmartphone =props.smartphone;
   let datosAccessorio = props.accessorio;
   console.log(datosAccessorio,datosSmartphone,datosDelUsuario)

   let history = useHistory();

    // datos del usuario //

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    // hooks //

    const [marca,setMarca]=React.useState('Samsung')
    const [modelo,setModelo]=React.useState('A10')
    const [render,setRender]=React.useState('')
    const [repuestos,setRepuestos]= React.useState([]);
    const [accesorios,setAccessorios]= React.useState([]);
    const [pantalla,setPantalla]=React.useState();
    const [conector,setConector]=React.useState();


    const [opciones,setOpciones]= React.useState([
    {check:false,id:"pantalla"},
    {check:false,id:"conector"},
    {check:false,id:"auricular"},
    {check:false,id:"buzz"},
    {check:false,id:"microfono"},
    {check:false,id:'software'}
    ])
    

    // functions //

    const classes= useStyles();

    const handelModel = (event)=>{

     
      setModelo(event.target.value)

    }
    const handelMarca = (event)=>{

        setMarca(event.target.value)
      
  
      }
     
       
    const handelPantalla =(e)=>{

        setPantalla({[e.target.name]:e.target.value})
    }
    const handelConector =(e)=>{

         setConector({[e.target.name]:e.target.value})
    }



    //suma para el presupuesto :


    const sumaTotal = (pantalla,conector)=>{
      
       let resultado = pantalla + conector;
 console.log(resultado)
       return resultado
       
   }

  




     

      console.log(pantalla?.pantalle)


useEffect(async()=>{

    let response_repuestos = await axios.get('http://localhost:3002/repuestos');
    setRepuestos(response_repuestos.data);
    let response_accessorios = await axios.get('http://localhost:3002/accessorios');
    setAccessorios(response_accessorios.data);

    },[]);

    console.log(repuestos)
    console.log(marca)

    let resultado = repuestos.filter( (repuesto)=> { return repuesto.modelo === modelo; });
    console.log(resultado)


    // funcion sums precio total del presupuesto //

   


    let renderA10 = <div className="options">
         <FormControl className={classes.formControl}>
             <Select labelID ='select-demo' id = 'Modelos' value ={modelo} onChange={handelModel}>
                   <MenuItem value ='Note 9' >Note 9</MenuItem> 
                   <MenuItem value ='Note 8'>Note 8</MenuItem> 
                   <MenuItem value ='A3'>Mi A3</MenuItem> 
                   <MenuItem value ='Mi Mix 3'>Mi Mix 3</MenuItem> 
                   
              </Select>
          </FormControl>
        
    </div>
   
   const RenderSamusungMarcas =(props)=>{

    return <div className="SelectInput">


                 

    <FormControl className={classes.formControl}>

      
        <Select labelID ='select-demo' id = 'Marcas' value ={marca} onChange={handelMarca}>


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
   }


const RenderSamusungModels =(props)=>{

    return <div className="SelectInput">


                 

          <FormControl className={classes.formControl}>
                <Select labelID ='select-demo' id = 'Modelos' value ={modelo} onChange={handelModel}>
                   <MenuItem value ='A10' >A10</MenuItem> 
                   <MenuItem value ='A20'>A20</MenuItem> 
                   <MenuItem value ='A30'>A30</MenuItem> 
                   <MenuItem value ='A50'>A50</MenuItem> 
                   <MenuItem value = 'A70'>A70</MenuItem> 
                   <MenuItem value = 'Note 9'>Note9</MenuItem> 
                   <MenuItem value = 'Note 8'>Note 8</MenuItem> 
                   <MenuItem value = 'Note 10'>Note 10</MenuItem> 
                  

              </Select>
          </FormControl>

      
</div>
   }

     
   

   if(credentials?.user.name ){
   return (
       <>
      
       <div className="vista-presupuesto-container">
       <Header style='logged-two'/>
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
                  <RenderSamusungMarcas/>
                  <RenderSamusungModels/>

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
                        <div className="vista-check">
                            <input className='checkbox-style' type="checkbox" name ='conector' value={resultado[0]?.conectorDeCarga} onChange ={handelConector}/>
                           
                            Conector de carga -  <strong> {resultado[0]?.conectorDeCarga} Euros</strong>
                        </div>

                        <div className="error-estetico"><h2>Daños estéticos / Roturas </h2></div>
                        <div className="vista-check">
                        <input className='checkbox-style' type="checkbox" name ='pantalle'  value={resultado[0]?.pantalla} onChange ={handelPantalla}/>
                        Pantalla ORIGINAL -  <strong> {resultado[0]?.pantalla} Euros</strong>

                        </div>

                        <div className="vista-div-problemas-de-audio"><h2>Problemas de audio </h2></div>
                        <div className="vista-check vista-audio-check">
                        

                          <div className="tipo-averia-audio">
                            <div className="div-checkbox-and-averia">
                                
                                <input className='checkbox-style' type="checkbox"/>
                               <div className="altavoz">Micrófono - <strong> {resultado[0]?.microfono} Euros</strong></div>
                               </div>

                            <div className="div-checkbox-and-averia">
                            <input className='checkbox-style' type="checkbox"/>
                            <div className="speaker">Auricular speaker - <strong> {resultado[0]?.auricular} Euros</strong> </div>
                               </div>

                            <div className="div-checkbox-and-averia">
                               <input className='checkbox-style' type="checkbox"/>  
                               <div className="altavoz-buzzer">Altavoz buzzer - <strong> {resultado[0]?.buzz} Euros</strong></div>
                            </div>

                            </div>

                            
                        </div>

                        <div className="error-de-software"><h2>Reinstalacion de softwares </h2></div>
                        <div className="vista-check">
                            <input className='checkbox-style' type="checkbox"/> 
                            Software -  <strong> {resultado[0]?.software} Euros</strong>
                        </div>

                        <div className="no-enciende-ni-carga"><h2>Contacta con nosotros si no encuentras tu averia </h2></div>
                        <div className="vista-check">

                            <ContactRender>
                                <div className="contacta-nos-style"> Contacta-Nos </div>
                           </ContactRender>
                        </div>
                      
                      </div>
                     


                 </div>

                      <div className="separador-presupuesto-vista-div-reparaciones"></div>
                      <div className = 'total-presupuesto'>  
                          Precio Total : {sumaTotal}
                      
                       </div>             

               </div>
           </div>
      </>
   )}else{
       return(

<>
      
      <div className="vista-presupuesto-container">
      <Header style='register'/>
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
                 <RenderSamusungMarcas/>
                 <RenderSamusungModels/>

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
                       <div className="vista-check">
                           <input className='checkbox-style' type="checkbox"/>
                          
                           Conector de carga -  <strong> {resultado[0]?.conectorDeCarga} Euros</strong>
                       </div>

                       <div className="error-estetico"><h2>Daños estéticos / Roturas </h2></div>
                       <div className="vista-check">
                       <input className='checkbox-style' type="checkbox"  name ='pantalla' />
                       Pantalla ORIGINAL -  <strong> {resultado[0]?.pantalla} Euros</strong>

                       </div>

                       <div className="vista-div-problemas-de-audio"><h2>Problemas de audio </h2></div>
                       <div className="vista-check vista-audio-check">
                       

                         <div className="tipo-averia-audio">
                           <div className="div-checkbox-and-averia">
                               
                               <input className='checkbox-style' type="checkbox"/>
                              <div className="altavoz">Micrófono - <strong> {resultado[0]?.microfono} Euros</strong></div>
                              </div>

                           <div className="div-checkbox-and-averia">
                           <input className='checkbox-style' type="checkbox"/>
                           <div className="speaker">Auricular speaker - <strong> {resultado[0]?.auricular} Euros</strong> </div>
                              </div>

                           <div className="div-checkbox-and-averia">
                              <input className='checkbox-style' type="checkbox"/>  
                              <div className="altavoz-buzzer">Altavoz buzzer - <strong> {resultado[0]?.buzz} Euros</strong></div>
                           </div>

                           </div>

                           
                       </div>

                       <div className="error-de-software"><h2>Reinstalacion de softwares </h2></div>
                       <div className="vista-check">
                           <input className='checkbox-style' type="checkbox"/> 
                           Software -  <strong> {resultado[0]?.software} Euros</strong>
                       </div>

                       <div className="no-enciende-ni-carga"><h2>Contacta con nosotros si no encuentras tu averia </h2></div>
                       <div className="vista-check">

                           <ContactRender onClick={()=> history.push('/contact')}>
                               <div className="contacta-nos-style" > Contacta-Nos </div>
                          </ContactRender>
                       </div>
                       
                     <div className="calculo-del-presupuesto">

                           Total precio piezas a Sustituir  : {sumaTotal} <br/><br/>
                           Envio , Peninsula  : 8.90 Euros<br/>
                           
                           <h2>Total Estimado Presupesto  :  €</h2>
                       </div>
                     </div>

                    


                </div>

                     <div className="separador-presupuesto-vista-div-reparaciones"></div>


 
              </div>
             
        
          </div>
          <FooterDos/>
     </>















       )
           
       
   }
}

const mapStateToProps=(state)=>{

     return {
          user:state.userReducer.user,
          //smartphone:state.smartphoneReducer.smartphone,
         // accessorio:state.accessorioReducer.accessorio
     }
}

export default connect(mapStateToProps)(Presupuestos);