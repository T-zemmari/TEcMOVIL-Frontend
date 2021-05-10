import React from 'react';
 import * as FaIcons from 'react-icons/fa';
 import * as AiIcons from 'react-icons/ai';
 import * as IoIcons from 'react-icons/io';
 

 
 export const SideBarData = [
   {
     path: '/tienda',
     icon: <AiIcons.AiFillHome />,
     cName: 'nav-text'
   },
   {
    path: '/presupuestos',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
   },
   {
     path: '/cart',
     icon: <FaIcons.FaCartPlus />,
     cName: 'nav-text'
   },
   {
    path: '/contact',
    icon: <IoIcons.IoMdHelpCircle/>,
    cName: 'nav-text'
  }
   
 ];