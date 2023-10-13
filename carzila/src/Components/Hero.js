import React from 'react'
import './Hero.css'

export default function Hero(props) {
  return (  
    <div className={props.clname}>
      <img alt='cars pics' src={props.src} />
      <center>
      <div className='herotext'>
        
        <h1>{props.text}</h1>
        <p>{props.para}</p>
        <a href='/' className={props.btnclassname}>{props.button}</a>
        </div>
        </center>   
      


    </div>
  )
}
