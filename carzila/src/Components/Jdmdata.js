import React from 'react'
import './JdmStyle.css'

export default function Tripdata(props) {
  return (
    <div className='jdmcontainer'>
                <div className='jdmphotos'>               
                 <img alt='jdm' src={props.jdmsrc}/>
                 
                 <h3>{props.heading}</h3>
                 <p>{props.data}</p>
                 </div>
                
    </div>
  )
}
