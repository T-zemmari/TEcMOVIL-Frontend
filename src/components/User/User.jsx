import React from 'react';
import './User.scss';


const User = ({name,lastname,email,phone,adress,born,payment,onClick})=>{

    
     


    return(
        <div className="lista-usuarios-registrados-datos">
        <div className=" user-data-admin-datos  
          user-name-admin-view">{name}</div>
        
        <div className="user-data-admin-datos  user-lastname-admin-view">{lastname}</div>

        <div className="user-data-admin-datos
         user-email-admin-view">{email}</div>

        <div className="user-data-admin-datos 

        user-phone-admin-view">{phone}</div>

        <div className="user-data-admin-datos
         user-adress-admin-view">{adress}</div>
        <div className="user-data-admin-datos
         user-born-admin-view">{born}</div>
        <div className="user-data-admin-datos
         user-payment-admin-view">{payment}</div>
    </div>
    )
}

export default User;