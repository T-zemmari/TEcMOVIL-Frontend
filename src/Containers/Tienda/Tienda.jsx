import React, { useEffect, useState } from 'react';
import './Tienda.scss';
import Header from '../../components/Header/Header';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Product from '../../components/Products/Product';
import { Switch, useHistory } from 'react-router';
import {connect} from 'react-redux';
import { SMARTPHONES,ACCESSORIOS ,BUSQUEDA_SEARCH} from '../../Redux/Types';
import Loading from '../../components/Loading/Loading';
import Search from 'antd/lib/transfer/search';





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
         localStorage.setItem('foundModelsProducts',JSON.stringify(response_for_phones.data))
         

         let response_for_access = await axios.get('http://localhost:3002/accessorios');
         setAccessorios(response_for_access.data);
         props.dispatch({type:ACCESSORIOS,payload:response_for_access.data});
    },[])



   
   // --------funcion obtener datod del producto selecionado y redirigirlo a product-profile---------//

    const GetProductInfo = (product) => {
        localStorage.removeItem('productos');
        localStorage.setItem('productos',JSON.stringify(product));
        history.push('/product-profile')
     
     };

    

                       {/* pageOne es donde se renderizan los smartphones*/}

     if(credentials?.user.name && page ==='pageOne'){
        return (
         <>
         <Loading visible={loading}></Loading>
         <Header  style ='logged-two'/>
         <div className="vista-Container-Tienda">
             
     
             <div className="nav-bar-container">
            
             
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
                  Accesorios 
              </Button>
              <Button variant="contained" color="secondary">
                  Xiaomi
              </Button>
              <Button variant="contained" color="secondary">
                  Samsung
              </Button>
              <Button variant="contained" color="secondary">
                  Iphone
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
             
    
               {<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño = 'en-tienda' onClick={()=>GetProductInfo(phones)}/>)}
               </div>}
     
            
     
           </div>
     
         </div>
         </>
        )}


                        {/* accessorio es donde se renderizan los accessorios*/}
        
        
        if(credentials?.user.name && page === 'accesorios'){
     
     
         return (
           <>
           <Loading visible={loading}></Loading>
           <Header  style ='logged-two'/>
           <div className="vista-Container-Tienda">
               
       
               <div className="nav-bar-container">
              
               
                <Button variant="contained" color="secondary" onClick={()=>shwichPages('pageOne')}>
                    Smartphones 
                </Button>
                <Button variant="contained" color="secondary">
                    Xiaomi
                </Button>
                <Button variant="contained" color="secondary">
                    Samsung
                </Button>
                <Button variant="contained" color="secondary">
                    Iphone
                </Button>
       
       
       
               </div>
       
             <div className="vista-contenedor-telefonos-repuestos-accessorio">
       
                 <div className="vista-nav-bar">
                   <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                   <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                     Total Productos = {accesorios.length}
                   </Button> 
                     
                  
                 </div>
       
               
                     
              
       
                 {<div className="vista-todos-los-repuestos">
                     {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
                 </div>}
       
               <div className="vista-todos-los-accessorios">
       
                 </div>
       
             </div>
       
           </div>
           </>)


                      {/* Aqui se renderizan los accessorios pero Sin estar el usuario logeado*/}
     
     
        }if(!credentials?.user.name && page === 'accesorios'){
     
     
            return (
              <>
              <Loading visible={loading}></Loading>
              <Header  style ='register'/>
              <div className="vista-Container-Tienda">
                  
          
                  <div className="nav-bar-container">
                 
                  
                   <Button variant="contained" color="secondary" onClick={()=>shwichPages('repuestos')}>
                       Smartphones 
                   </Button>
                   <Button variant="contained" color="secondary">
                       Xiaomi
                   </Button>
                   <Button variant="contained" color="secondary">
                       Samsung
                   </Button>
                   <Button variant="contained" color="secondary">
                       Iphone
                   </Button>
          
          
          
                  </div>
          
                <div className="vista-contenedor-telefonos-repuestos-accessorio">
          
                    <div className="vista-nav-bar">
                      <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                      <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                        Total Productos = {accesorios.length}
                      </Button> 
                        
                     
                    </div>
          
                  
                        
                 
          
                    {<div className="vista-todos-los-repuestos">
                        {accesorios.map(accesorios=> <Product key={accesorios._id}{...accesorios} nombre = 'repuesto'  onClick={()=>GetProductInfo(accesorios)}/>)}
                    </div>}
          
                  <div className="vista-todos-los-accessorios">
          
                    </div>
          
                </div>
          
              </div>
              </>)
        
        
           }

          
        
        
        else{

                             {/* Aqui se  renderizan los smartphones sin que el ususario este loggeado */}

            return(
         <>
         <Header  style ='register'/>
         <Loading visible={loading}></Loading>
         <div className="vista-Container-Tienda">
             
     
             <div className="nav-bar-container">
            
             
              <Button variant="contained" color="secondary" onClick={()=>shwichPages('accesorios')}>
                  Accesorios 
              </Button>
              <Button variant="contained" color="secondary">
                  Xiaomi
              </Button>
              <Button variant="contained" color="secondary">
                  Samsung
              </Button>
              <Button variant="contained" color="secondary">
                  Iphone
              </Button>
     
     
     
             </div>
     
           <div className="vista-contenedor-telefonos-repuestos-accessorio">
     
               <div className="vista-nav-bar">
                 <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                 <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                   Total Productos = {phones.length}
                 </Button> 
                   
                
               </div>
     
             
                   
            
     
               {<div className="vista-todos-los-repuestos">
                   {phones.map(phones=> <Product key={phones._id}{...phones} tamaño='normal' onClick={()=>GetProductInfo(phones)}/>)}
               </div>}
     
             <div className="vista-todos-los-accessorios">
     
               </div>
     
           </div>
     
         </div>
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