

import React, { Component } from 'react'
import { menuitems } from './MenuComp'

import './Navbarstyles.css'
import { Link } from 'react-router-dom'



class Navbar extends Component{


  render(){

      

      return(   
          
      <nav className='navbaritems'>
          <h1 className='logocar'>CarZilla</h1>

          <ul className='navmenu'>
          {menuitems.map((item,index)=>{
              return(
                
              <li key={index}>
                  <Link className={item.clsname} to={item.url}><i  className={item.icon}></i>{item.title}</Link>
              </li>)
             
             
          })}
             
          
          </ul>
          
          
          
         
          

         
         

      </nav>
      
      ) 
   
  }
}

export default Navbar