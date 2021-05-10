import React, { useEffect, useState } from 'react';
import './Tienda.scss';
import Header from '../../components/Header/Header';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Product from '../../components/Products/Product';
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { SMARTPHONES,ACCESSORIOS} from '../../Redux/Types';
import Loading from '../../components/Loading/Loading';
import FatherDay from '../../img/black-friday.jpg';
import calidad from '../../img/Quality.jpg';
import BasicPagination from '../../components/Paginacion/Paginacion';
import Bateria from '../../components/Bateria/Bateria';
import promo from '../../img/mejores-precios.jpg';




const Tienda = (props)=>{


    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const user = props.user;
    const token=props.token; 
    const smartphones = props.smartphones;
    let history = useHistory();

  /// hooks //
    
    
    const [loading, setLoading] = useState(false);
    const [phones,setPhones]=useState([]);
    const [accesorios,setAccessorios]=useState([]);
    const [baterias,setBaterias]=useState([]);
    const [page,setPage]=useState('pageOne');
    const [query,setQuery]=useState({
      search : ''
    });
    const [busqueda,setBusqueda]=useState('');
    const [arrayDondeBuscar,setArrayDondeBuscar]=useState('');
    const [respuestaDeLaBusqueda,setRespuestaDelaBusqueda]=([]);
   
  //-------- funcion para cambiar de pagina para que se pueda renderize otra vista-----------------------------------//
    
     

  const shwichPages=(nextPage)=>{

    setTimeout(()=>{
      setLoading(false)
    }
    ,1000)
      setLoading(true)
      setPage(nextPage)
  }

    let imgArr=[
        'https://fondosmil.com/fondo/32772.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInnPiPu1yksTuAH79j5mkjW3IcgwcDRIY16DONrXrjJZnQaFbdTK7by4kfHdWSNHy4eM&usqp=CAU'
    ]
    

    //funcion para la busqueda por nombre marca o modelo  del producto---------//


          const handler = (e)=>{ setQuery({...query,[e.target.name] : e.target.value})};

   
         
    const busquedaPorQuery = async()=>{


       setBusqueda(query)
       setArrayDondeBuscar(phones)
       setTimeout(()=>{
          setLoading(false)
       },1000)
       setLoading(true)
      
      
      }

      const data= Object.values(arrayDondeBuscar).filter((val)=>{
        if(busqueda.search ==''){
          return val
        }else if(
          val.name.includes(busqueda.search)){
            return val
          }})
      
    
    localStorage.setItem('data',JSON.stringify(data));
    let dataTorender = JSON.parse(localStorage.getItem('data'));
    console.log(dataTorender)
    

  
    //---------- me traigo los productos------------------//

    useEffect(async()=>{

         let response_for_phones = await axios.get('http://localhost:3002/products');
         setPhones(response_for_phones.data.splice(0,16));
         
         props.dispatch({type:SMARTPHONES,payload:response_for_phones.data});
         localStorage.setItem('foundModelsProducts',JSON.stringify(response_for_phones.data));
         

         let response_for_access = await axios.get('http://localhost:3002/accessorios');
         setAccessorios(response_for_access.data);
         props.dispatch({type:ACCESSORIOS,payload:response_for_access.data});


         let response_for_bat = await axios.get('http://localhost:3002/baterias');
         setBaterias(response_for_bat.data)
         localStorage.setItem('baterias',response_for_bat.data);
        
    },[])

    console.log(baterias)



   
   // --------funcion obtener datod del producto selecionado y redirigirlo a product-profile---------//

    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };

    

                       {/* Aqui se renderizan los smartphones cuando el usuario  esta logeado*/}

     if(credentials?.user.name && page ==='pageOne'){
        return (
         <>
         <Loading visible={loading}></Loading>


         <div className="header"><Header style='logged'/></div>
           <div className="vista-portada-uno">
             <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
          </div>



         <div className="vista-Container-Tienda">
             
     
             <div className="nav-bar-container">
            
             
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
                  Accesorios 
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>history.push('Repuestos')}>
                  Repuestos
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
                  Baterias
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>history.push('tienda')}>
                  Outlel
              </Button>
     
     
     
             </div>

            
           <div className="vista-contenedor-telefonos-repuestos-accessorio">

           

     
               <div className="vista-nav-bar-tienda">
                 <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                 <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                   Total Productos = {phones.length}
                 </Button> 
                   
                
               </div>

               <div className="input-busqueda">

             <input className='input-search' type="text" name='search' onChange={handler}/>
             <div className='boton-tienda-search' >

                <Button  variant="outlined" color="secondary" onClick={()=>busquedaPorQuery()}>
                   Search
                </Button>
                </div>
              </div>
                
             
              <h3 className='h3-vista-bateria'> Teléfonos móviles con un precio de !!!chollo!!!</h3>


              <div className="imagen-vista-baterias">
              <img className="imagen-vista-baterias" src={promo}  />
            </div>

              {<div className="vista-todos-los-repuestos">
                   {dataTorender.map(dataTorender=> <Product key={dataTorender._id}{...dataTorender} tamaño = 'en-tienda' onClick={()=>GetProductInfo(dataTorender)}/>)}
               </div>}
             
    
               {<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño = 'en-tienda' onClick={()=>GetProductInfo(phones)}/>)}
               </div>}
     
            <BasicPagination />
     
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
         </>
        )}


        {/*---------------aqui se renderizan los smartphones ------------cuando el usuario-----------no este----------logeado------------*/}



{/* Aqui se renderizan los smartphones cuando el usuario  esta logeado*/}

if(!credentials?.user.name && page ==='usuario-no-logeado-smartphones'){
  return (
   <>
   <Loading visible={loading}></Loading>


   <div className="header"><Header style='tienda-not-logged'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
              </div>


   <div className="vista-Container-Tienda">
       

       <div className="nav-bar-container">
      
       
        <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
            Accesorios 
        </Button>
        <Button variant="contained" color="secondary" onClick={()=>history.push('Repuestos')}>
            Repuestos
        </Button>
        <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
            Baterias
        </Button>
        <Button variant="contained" color="secondary" onClick={()=>history.push('tienda')}>
            Outlel
        </Button>



       </div>

      
     <div className="vista-contenedor-telefonos-repuestos-accessorio">

     


         <div className="vista-nav-bar-tienda">
           <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
           <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
             Total Productos = {phones.length}
           </Button> 
             
          
         </div>

         <div className="input-busqueda">

       <input className='input-search' type="text" name='search' onChange={handler}/>
       <div className='boton-tienda-search' >

          <Button  variant="outlined" color="secondary" onClick={()=>busquedaPorQuery()}>
             Search
          </Button>
          </div>
        </div>
          
       
        <h3 className='h3-vista-bateria'> Teléfonos móviles con un precio de !!!chollo!!!</h3>


        <div className="imagen-vista-baterias">
              <img className="imagen-vista-baterias" src={promo}  />
            </div>


        {<div className="vista-todos-los-repuestos">
             {dataTorender.map(dataTorender=> <Product key={dataTorender._id}{...dataTorender} tamaño = 'en-tienda' onClick={()=>GetProductInfo(dataTorender)}/>)}
         </div>}
       

         {<div className="vista-todos-los-repuestos">
             {phones.map(phones=> <Product key={phones._id}{...phones} tamaño = 'en-tienda' onClick={()=>GetProductInfo(phones)}/>)}
         </div>}

      <BasicPagination />

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
   </>
  )}















             {/* Aqui se renderizan las Baterias cuando el usuario  esta logeado*/}

     if(credentials?.user.name && page ==='baterias'){
      return (
       <>
       <Loading visible={loading}></Loading>


       <div className="header"><Header style='logged'/></div>
         <div className="vista-portada-uno">
           <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
        </div>



       <div className="vista-Container-Tienda">
           
   
           <div className="nav-bar-container">
          
           
            <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
                Accesorios 
            </Button>
            <Button variant="contained" color="secondary" onClick={()=>history.push('Repuestos')}>
                Repuestos
            </Button>
            <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
                Baterias
            </Button>
            <Button variant="contained" color="secondary" onClick={()=>shwichPages('/tienda')}>
                Outlel
            </Button>
   
   
   
           </div>

          
         <div className="vista-contenedor-telefonos-repuestos-accessorio">

         

   
             <div className="vista-nav-bar-tienda">
               <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
               <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                 Total Productos = {phones.length}
               </Button> 
                 
              
             </div>

             <div className="input-busqueda">

           <input className='input-search' type="text" name='search' onChange={handler}/>
           <div className='boton-tienda-search' >

              <Button  variant="outlined" color="secondary" onClick={()=>busquedaPorQuery()}>
                 Search
              </Button>
              </div>
            </div>

            
          
            

            {<div className="vista-todos-los-repuestos">
                 {dataTorender.map(dataTorender=> <Product key={dataTorender._id}{...dataTorender} tamaño = 'en-tienda' onClick={()=>GetProductInfo(dataTorender)}/>)}
             </div>}


             <div className="imagen-vista-baterias">
              <img className="imagen-vista-baterias" src={promo}  />
            </div>
              
           
  
             <div className="titulo">

               <h3>Baterías para teléfonos móviles y smartphones</h3> 
                Hazte con una de estas baterías para móviles y devuelve tu smartphone a la vida. Baterías originales de Samsung, Huawei, LG y todas las marcas conocidas de teléfonos móviles. Envíos rápidos, desde 24 horas.
           </div>
     
             
                    {<div className="vista-todos-los-repuestos">
                   {baterias.map(baterias=> <Bateria key={baterias._id}{...baterias} tamaño='normal' onClick={()=>GetProductInfo(baterias)}/>)}
            </div>}
            
     
               {/*{<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño='normal' onClick={()=>GetProductInfo(phones)}/>)}
            </div>}*/}

            <div className="parrafo-baterias">

                     <h3 className='h3-vista-bateria'>Encuentra una batería para tu móvil</h3> 
                     <p className="parrafo-style-vista-bateria">Muchas veces creemos que nuestro viejo smartphone ya está para el arrastre. Pero con una batería nueva, todo cambia. Tengas el modelo que tengas.

                 
                     En  TEcMovil, puedes encontrar baterías para móviles a los mejores precios y con envío rápido. Cada teléfono necesita un tipo de batería concreto, y por eso tienes que fijarte bien en que sean compatibles.</p> 

                     <p className="parrafo-style-vista-bateria">
                        No es una cuestión de capacidad y de mAh, sino de diseño. Atrás quedan los viejos modelos Nokia en los que varios móviles compartían la misma clase de batería. Si quieres revitalizar a tu smartphone o darle una última oportunidad, las baterías de móviles son una apuesta segura.
                        </p>    

                      <h3 className='h3-vista-bateria'>Una batería para tu móvil Samsung</h3>  
                        <p className="parrafo-style-vista-bateria">
                  
                ¿Tu Galaxy se queda tirado cada día? Puede ponerle remedio comprando una batería de móvil Samsung. Original y en perfecto estado, para que tu smartphone recupere su esplendor de antaño.</p>

                  <h3 className='h3-vista-bateria'>Baterías para móviles chinos</h3>

                  <p className="parrafo-style-vista-bateria">
                   La autonomía es uno de los aspectos que más se castiga con el paso del tiempo. Si estás buscando baterías para móviles chinos, en TEcMovil puedes hacerte con este tipo de repuesto al mejor precio.</p>
             </div>
   
          <BasicPagination />
   
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
       </>
      )}



                        {/* Aqui se renderizan los accessorios cuando el usuario  esta logeado*/}
        
        
        if(credentials?.user.name && page === 'accesorios'){
     
     
         return (
           <>
           <Loading visible={loading}></Loading>
           <div className="header"><Header style='logged'/></div>
           <div className="vista-portada-uno">
             <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
          </div>
           <div className="vista-Container-Tienda">
               
       
               <div className="nav-bar-container">
              
               
                <Button variant="contained" color="secondary" onClick={()=>shwichPages('pageOne')}>
                    Smartphones 
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>history.push('Repuestos')}>
                    Repuestos
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
                  Baterias
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>history.push('tienda')}>
                  Outlel
                </Button>
       
       
               </div>
               <div className="vista-nav-bar-tienda">
                   <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                   <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                     Total Productos = {accesorios.length}
                   </Button> 
                     
                  
                 </div>
       
             <div className="vista-contenedor-telefonos-repuestos-accessorio">
       
                 
             <h3 className='h3-vista-bateria'> Ofertas en accesorios para todas las marcas!!!</h3>
             Si buscas accesorios para teléfonos móviles, aquí podrás adquirir todos los complementos que tu smartphone o tablet necesita: fundas, auriculares, baterías y cables entre otras muchas opciones. ¡Descúbrelas!

                
          <div className="imagen-vista-baterias">
              <img className="imagen-vista-baterias" src={promo}  />
            </div>
                     
              
       
                 {<div className="vista-todos-los-repuestos">
                     {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
                 </div>}




                 <h3 className='h3-vista-bateria'>Accesorios para móviles</h3>    
                 <p className="parrafo-style-vista-bateria" >Un teléfono móvil no está completo sin sus accesorios. En TEcMovil puedes comprar accesorios de móviles online compatibles con un gran número de modelos. Tengas el smartphone que tengas, nosotros tenemos accesorios para tu móvil. Samsung, iPhone, móviles chinos... ¡Busca y encontrarás!

                     Si quieres proteger tu móvil ante posibles golpes, echa un vistazo a las secciones de fundas para móviles y protectores de cristal templado. También puedes conseguir más memoria interna para tu teléfono con una tarjeta Micro SD, así podrás grabar todos los vídeos que quieras sin tener que borrar nada.</p>

                     <p className="parrafo-style-vista-bateria" >Otros accesorios para móvil que puedes encontrar en esta web son los repuestos. Se trata de aquellas piezas o componentes que ya incluía tu smartphone pero quieres reponer. Por ejemplo, cables de datos, punteros o baterías de móviles.

                     TEcMovil, tu tienda de accesorios móviles
                     Realizamos envíos rápidos y con gastos de envío gratis en pedidos superiores a 28€ euros (Península y Baleares). Puedes aprovechar y repasar las categorías de nuestra tienda online de accesorios móviles para que el envío te salga gratuito. ¡Seguro que encuentras algo que te gusta! </p>
       
               <div className="vista-todos-los-accessorios">
       
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
           
           </>)


                      {/* Aqui se renderizan los accessorios cuando el usuario  no esta logeado*/}
     
     
        }if(!credentials?.user.name && page === 'accesorios'){
     
     
            return (
              <>
              <Loading visible={loading}></Loading>
              <div className="header"><Header style='tienda-not-logged'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
              </div>
              <div className="vista-Container-Tienda">
                  
          
                  <div className="nav-bar-container">
                 
                  
                   <Button variant="contained" color="secondary" onClick={()=>shwichPages('usuario-no-logeado-smartphones')}>
                       Smartphones 
                   </Button>
                   <Button variant="contained" color="secondary"onClick={()=>history.push('Repuestos')}>
                       Repuestos
                   </Button>
                   <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
                      Baterias
                   </Button>
                  <Button variant="contained" color="secondary" onClick={()=>history.push('tienda')}>
                      Outlel
                  </Button>
          
          
          
                  </div>
          
                <div className="vista-contenedor-telefonos-repuestos-accessorio">
          
                    <div className="vista-nav-bar">
                      <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                      <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                        Total Productos = {accesorios.length}
                      </Button> 
                        
                     
                    </div>


                     
          <div className="imagen-vista-baterias">
              <img className="imagen-vista-baterias" src={promo}  />
            </div>
          
                  
                    <h3 className='h3-vista-bateria'> Ofertas en accesorios para todas las marcas!!!</h3>
                 
          
                    {<div className="vista-todos-los-repuestos">
                        {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
                    </div>}

                   <h3 className='h3-vista-bateria'>Accesorios para móviles</h3>    
                 <p className="parrafo-style-vista-bateria" >Un teléfono móvil no está completo sin sus accesorios. En TEcMovil puedes comprar accesorios de móviles online compatibles con un gran número de modelos. Tengas el smartphone que tengas, nosotros tenemos accesorios para tu móvil. Samsung, iPhone, móviles chinos... ¡Busca y encontrarás!

                     Si quieres proteger tu móvil ante posibles golpes, echa un vistazo a las secciones de fundas para móviles y protectores de cristal templado. También puedes conseguir más memoria interna para tu teléfono con una tarjeta Micro SD, así podrás grabar todos los vídeos que quieras sin tener que borrar nada.</p>

                     <p className="parrafo-style-vista-bateria" >Otros accesorios para móvil que puedes encontrar en esta web son los repuestos. Se trata de aquellas piezas o componentes que ya incluía tu smartphone pero quieres reponer. Por ejemplo, cables de datos, punteros o baterías de móviles.

                     TEcMovil, tu tienda de accesorios móviles
                     Realizamos envíos rápidos y con gastos de envío gratis en pedidos superiores a 28€ euros (Península y Baleares). Puedes aprovechar y repasar las categorías de nuestra tienda online de accesorios móviles para que el envío te salga gratuito. ¡Seguro que encuentras algo que te gusta! </p>
       

                    
          
                  <div className="vista-todos-los-accessorios">
          
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
              </>)
        
        
           }

          
        
        
        else{

                             {/* Aqui se  renderizan los Baterias cuando el usuario  no esta logeado */}

            return(
         <>
         <div className="header"><Header style='tienda-not-logged'/></div>
                  <div className="vista-portada-uno">
                     <img className="vista-portada-uno" src={FatherDay} alt="tab"/>
              </div>
         <Loading visible={loading}></Loading>
         <div className="vista-Container-Tienda">
             
     
             <div className="nav-bar-container">
            
             
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
                  Accesorios 
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>history.push('Repuestos')}>
                  Repuestos
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('baterias')}>
                  Baterias
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>history.push('tienda')}>
                  Outlel
              </Button>
     
     
     
             </div>
     
           <div className="vista-contenedor-telefonos-repuestos-accessorio">
     
               <div className="vista-nav-bar">
                 <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                 <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                   Total Productos = {baterias.length}
                 </Button> 
                   
                
               </div>
               <div className="imagen-vista-baterias">
                  <img className="imagen-vista-baterias" src={promo}  />
               </div>

               <div className="titulo">

               <h3>Baterías para teléfonos móviles y smartphones</h3>
                 Hazte con una de estas baterías para móviles y devuelve tu smartphone a la vida. Baterías originales de Samsung, Huawei, LG y todas las marcas conocidas de teléfonos móviles. Envíos rápidos, desde 24 horas.
               </div>

              
     
             
                    {<div className="vista-todos-los-repuestos">
                   {baterias.map(baterias=> <Bateria key={baterias._id}{...baterias} tamaño='normal' onClick={()=>GetProductInfo(baterias)}/>)}
            </div>}
            
     
               {/*{<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño='normal' onClick={()=>GetProductInfo(phones)}/>)}
            </div>}*/}

            <div className="parrafo-baterias">

                     <h3 className='h3-vista-bateria'>Encuentra una batería para tu móvil</h3> 
                     <p className="parrafo-style-vista-bateria">Muchas veces creemos que nuestro viejo smartphone ya está para el arrastre. Pero con una batería nueva, todo cambia. Tengas el modelo que tengas.

                 
                     En  TEcMovil, puedes encontrar baterías para móviles a los mejores precios y con envío rápido. Cada teléfono necesita un tipo de batería concreto, y por eso tienes que fijarte bien en que sean compatibles.</p> 

                     <p className="parrafo-style-vista-bateria">
                        No es una cuestión de capacidad y de mAh, sino de diseño. Atrás quedan los viejos modelos Nokia en los que varios móviles compartían la misma clase de batería. Si quieres revitalizar a tu smartphone o darle una última oportunidad, las baterías de móviles son una apuesta segura.
                        </p>    

                      <h3 className='h3-vista-bateria'>Una batería para tu móvil Samsung</h3>  
                        <p className="parrafo-style-vista-bateria">
                  
                ¿Tu Galaxy se queda tirado cada día? Puede ponerle remedio comprando una batería de móvil Samsung. Original y en perfecto estado, para que tu smartphone recupere su esplendor de antaño.</p>

                  <h3 className='h3-vista-bateria'>Baterías para móviles chinos</h3>

                  <p className="parrafo-style-vista-bateria">
                   La autonomía es uno de los aspectos que más se castiga con el paso del tiempo. Si estás buscando baterías para móviles chinos, en TEcMovil puedes hacerte con este tipo de repuesto al mejor precio.</p>
             </div>
     
             <div className="vista-todos-los-accessorios">
     
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
         </>
                    
             
         
            )
                
            
        }



     }
    


const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user,
        product:state.productReducer.product,
        smartphones:state.smartReducer.smartphones,
        accessorios:state.accessReducer.accessorios,
        
    }
 }
 
 
 export default connect(mapStateToProps)(Tienda);