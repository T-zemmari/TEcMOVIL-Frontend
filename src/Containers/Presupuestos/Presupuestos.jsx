import React, { useEffect, useState } from 'react';
import './Presupuestos.scss';
import Header from '../../components/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Phone from '../../img/phone.jpg';
import {connect} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
import ContactRender from '../../components/Modal/Contact-render';
import Button from '@material-ui/core/Button'
import Android from '../../img/Banner-soporte-tecnico-1024x320.jpg';
import calidad from '../../img/Quality.jpg';

const useStyles = makeStyles((theme)=>({
        formControl : {
            margin :theme.spacing(1),
            minWidth:300
    }}))

const Presupuestos = (props)=>{


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    const [repuestos,setRepuestos]= React.useState([]);
   
   

    
    //hooks para Checkbox------//

    
    

    const[precioPantalla , setPrecioPantalla]=useState(0)
    const[precioConector , setPrecioConector]=useState(0)
    const[precioSoftware , setPrecioSoftware]=useState(0)
    const[precioBuzzer , setPrecioBuzzer]=useState(0)
    const[precioMicrofono , setPrecioMicrofono]=useState(0)
    const[precioAuricular , setPrecioAuricular]=useState(0)
   

   
     

    // functiones para las selecciones//

    const classes= useStyles();

    const handelModel = (event)=>{

     
      setModelo(event.target.value)

    }
    const handelMarca = (event)=>{

        setMarca(event.target.value)
      
  
      }

      //Funcion para borrar el formulario del presupuesto

      const cleanPresupuesto=()=>{

         setPrecioPantalla(0)
         setPrecioConector(0)
         setPrecioSoftware(0)
         setPrecioBuzzer(0)
         setPrecioMicrofono(0)
         setPrecioAuricular(0)
         window.location.reload()
      
      }

    //suma para la suma de los repuestos:


      const sumaRepuestos = (a,b,c,d,e,f)=>{
       
          let resultado = a+b+c+d+e+f;
          return resultado
        }
      const precioRepuestos = sumaRepuestos(precioPantalla, precioSoftware , precioAuricular , precioBuzzer , precioConector , precioMicrofono);

      const PrecioTotal = precioRepuestos + ((precioRepuestos * 21) / 100 );
      const Iva = ((precioRepuestos * 21) / 100 );

   // aqui me traigo a los repeustos, se hacer cada vez que se recarga la pagina


useEffect(async()=>{

    let response_repuestos = await axios.get('http://localhost:3002/repuestos');
    setRepuestos(response_repuestos.data);
 

    },[]);

    // filtro en los repuestos , el repuesto elejido por el usuario


    let resultado = repuestos.filter( (repuesto)=> { return repuesto.modelo === modelo});
   
   
   const RenderSamusungMarcas =()=>{

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
       <div className="header"><Header style='logged'/></div>

                <div className="vista-portada-uno">
                 <img className="vista-portada-uno" src={Android} alt="tab"/>
                 </div>
       
     
       <div className="vista-presupuesto-container">
      
            <div className="body-container-prepusupuesto">

            


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
                            <input className='checkbox-style' type="checkbox" name ='conector' value={resultado[0]?.conectorDeCarga} onChange ={()=>setPrecioConector(resultado[0]?.conectorDeCarga)}/>
                           
                            Conector de carga -  <strong> {resultado[0]?.conectorDeCarga} Euros</strong>
                        </div>

                        <div className="error-estetico"><h2>Daños estéticos / Roturas </h2></div>
                        <div className="vista-check">
                        <input className='checkbox-style' type="checkbox" name ='pantalle'  value={resultado[0]?.pantalla} onChange ={()=>setPrecioPantalla(resultado[0]?.pantalla)}/>
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
                            <input className='checkbox-style' type="checkbox" onChange={()=>setPrecioAuricular(resultado[0]?.auricular)}/>
                            <div className="speaker">Auricular speaker - <strong> {resultado[0]?.auricular} Euros</strong> </div>
                               </div>

                            <div className="div-checkbox-and-averia">
                               <input className='checkbox-style' type="checkbox" onChange={()=>setPrecioBuzzer(resultado[0]?.buzz)}/>  
                               <div className="altavoz-buzzer">Altavoz buzzer - <strong> {resultado[0]?.buzz} Euros</strong></div>
                            </div>

                            </div>

                            
                        </div>

                        <div className="error-de-software"><h2>Reinstalacion de softwares </h2></div>
                        <div className="vista-check">
                            <input className='checkbox-style' type="checkbox" onChange={()=>setPrecioSoftware(resultado[0]?.software)}/> 
                            Software -  <strong> {resultado[0]?.software} Euros</strong>
                        </div>

                        <div className="no-enciende-ni-carga"><h2>Contacta con nosotros si no encuentras tu averia </h2></div>
                        <div className="vista-check">

                            <ContactRender>
                                <div className="contacta-nos-style"> Contacta-Nos </div>
                           </ContactRender>
                        </div>
                        <div className="calculo-del-presupuesto">

                           Total precio piezas a Sustituir  : {precioRepuestos} Euros <br/>
                           Envio , Peninsula  : 8.90 Euros<br/>
                           
                           <h3>Total Estimado Presupesto  : {PrecioTotal} €</h3>
                       </div>

                       <div className="aceptar-o-no">
                          
                          <Button variant="contained" color="secondary" >
                            Acepto El presupuesto
                          </Button>
                         
                          
                          <Button variant="contained" color="secondary"onClick={()=>cleanPresupuesto()}>
                            Borrar Presupuesto
                            </Button>
                            
                       </div>

                        
                      
                      </div>
                     
             </div>
                </div>
                {<footer className='footer-special-presupuesto'>
                            <div className="footer-container">
                                 <div className="vista-sobre-nosotros">
                                         Enlaces de interes
                                         <div>Envios</div>
                                         <div>Repuestos</div>
                                         <div>Accesorios</div>
                                         <div>Telefonos nuevos y de segunda mano</div>
                                         <div>Copyright TEcMovil</div>
        
                                  </div>
                             <div className="vista-sobre-nosotros">
                                           Sobre Nosotros
                                    <div>Calle los leones 28 bajo 46022 Valencia</div>
                                     <div></div>
                                     <div></div>
                                    </div>

                              <div className="vista-sobre-nosotros">
                                          
                                    <div className='calidad'>
                                        <img  className='calidad' src={calidad}/>
                                    </div>
            
                             </div>

                            </div>
                  </footer>}
           </div>
      </>
   )}else{
       return(

<>
      <div className="header"><Header style='tienda'/></div>
                   <div className="vista-portada-uno">
                      <img className="vista-portada-uno" src={Android} alt="tab"/>
                   </div>

      <div className="vista-presupuesto-container">
      
           <div className="body-container-prepusupuesto">
               

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
                           <input className='checkbox-style' type="checkbox" name='conector' value={resultado[0]?.conectorDeCarga} onChange={()=>setPrecioConector(resultado[0]?.conectorDeCarga)}/>
                          
                           Conector de carga -  <strong> {resultado[0]?.conectorDeCarga} Euros</strong>
                       </div>

                       <div className="error-estetico"><h2>Daños estéticos / Roturas  </h2></div>
                       <div className="vista-check">
                       <input className='checkbox-style' type="checkbox"  name ='pantalla'  value ={resultado[0]?.pantalla} onChange={()=>setPrecioPantalla(resultado[0]?.pantalla)}/>
                       Pantalla ORIGINAL -  <strong> {resultado[0]?.pantalla} Euros</strong>

                       </div>

                       <div className="vista-div-problemas-de-audio"><h2>Problemas de audio </h2></div>
                       <div className="vista-check vista-audio-check">
                       

                         <div className="tipo-averia-audio">
                           <div className="div-checkbox-and-averia">
                               
                               <input className='checkbox-style' type="checkbox" name='microfono'onChange={()=>setPrecioMicrofono(resultado[0]?.microfono)}/>
                              <div className="altavoz">Micrófono - <strong> {resultado[0]?.microfono} Euros</strong></div>
                              </div>

                           <div className="div-checkbox-and-averia">
                           <input className='checkbox-style' type="checkbox" name='auricular 'onChange={()=>setPrecioAuricular(resultado[0]?.auricular)}/>
                           <div className="speaker">Auricular speaker - <strong> {resultado[0]?.auricular} Euros</strong> </div>
                              </div>

                           <div className="div-checkbox-and-averia">
                              <input className='checkbox-style' type="checkbox" name='buzzer' onChange={()=>setPrecioBuzzer(resultado[0]?.buzz)}/>  
                              <div className="altavoz-buzzer">Altavoz buzzer - <strong> {resultado[0]?.buzz} Euros</strong></div>
                           </div>

                           </div>

                           
                       </div>

                       <div className="error-de-software"><h2>Reinstalacion de softwares </h2></div>
                       <div className="vista-check">
                           <input className='checkbox-style' type="checkbox" name='software' onChange={()=>setPrecioSoftware(resultado[0]?.software)}/> 
                           Software -  <strong> {resultado[0]?.software} Euros</strong>
                       </div>

                       <div className="no-enciende-ni-carga"><h2>Contacta con nosotros si no encuentras tu averia </h2></div>
                       <div className="vista-check">

                           <ContactRender onClick={()=> history.push('/contact')}>
                               <div className="contacta-nos-style" > Contacta-Nos </div>
                          </ContactRender>
                       </div>
                       
                     <div className="calculo-del-presupuesto">

                           Total precio piezas a Sustituir  : {precioRepuestos} Euros <br/>
                           Iva-21% : {Iva} Euros<br/>
                           
                           <h3>Total Estimado Presupesto  : {PrecioTotal} €</h3>
                       </div>

                       <div className="aceptar-o-no">
                          
                          <Button variant="contained" color="secondary" >
                            Acepto El presupuesto
                          </Button>
                         
                          
                          <Button variant="contained" color="secondary"onClick={()=>cleanPresupuesto()}>
                            Borrar Presupuesto
                            </Button>
                            
                       </div>
                     </div>
              </div>

                     <div className="separador-presupuesto-vista-div-reparaciones"></div>


 
              </div>
             
        
          </div>

                     <footer className='footer-special-presupuesto'>
                           <div className="footer-container">
                                <div className="vista-sobre-nosotros">
                                   Enlaces de interes
                                <div>Envios</div>
                                <div>Repuestos</div>
                                 <div>Accesorios</div>
                           <div>Telefonos nuevos y de segunda mano</div>
                           <div>Copyright TEcMovil</div>
        
                                 </div>
                             <div className="vista-sobre-nosotros">
                                   Sobre Nosotros
                             <div>Calle los leones 28 bajo 46022 Valencia</div>
                                    <div></div>
                                    <div></div>
                              </div>

                           <div className="vista-sobre-nosotros">
                                   
                              <div className='calidad'>
                                   <img  className='calidad' src={calidad}/>
                             </div>
            
                             </div>

                           </div>
                       </footer>
    
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