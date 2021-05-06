import React from 'react';
import { connect } from 'react-redux';



const Search =(props)=>{


    const busqueda= props.busqueda;
    console.log(busqueda)
    let dataTorender = JSON.parse(localStorage.getItem('data'));





    if( props.page ==='busqueda'){
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

           

     
               <div className="vista-nav-bar">
                 <Button variant="text" color="default" onClick={()=>history.push('/')}>Home</Button>\
                 <Button variant="text" color="default" onClick={()=>history.push('/tienda')}> Moviles</Button> \  <Button variant="text" color="default">
                   Total Productos = {busqueda.length}
                 </Button> 
                   
                
               </div>

               <div className="input-busqueda">

             <input className='input-search' type="text" name='seaech'/>
             <div className='boton-tienda-search' >

                <Button  variant="outlined" color="secondary">
                   Search
                </Button>
                </div>
              </div>
    
               {<div className="vista-todos-los-repuestos">
                   {dataTorender.map(dataTorender=> <Product key={dataTorender._id}{...dataTorender} tamaño = 'en-tienda' onClick={()=>GetProductInfo(dataTorender)}/>)}
               </div>}
     
             <div className="vista-todos-los-accessorios">
     
               </div>
     
           </div>
     
         </div>
         </>
        )}

        
   


}

const mapStateToProps =(state)=>{

    return {
       
        user: state.userReducer.user,
        busqueda:state.BusquedaReducer.busqueda
    }
 }
export default connect(mapStateToProps)(Search)