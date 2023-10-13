import React from 'react'
import './loginStyle.css'

export default function Login() {
  return (
    <center>
    <div className='logincontainer'>
        <h1>Wanna send a Message to us!</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Phone'/>
            <input placeholder='Email'/>
            <input placeholder='Car model'/>
            <textarea placeholder='Message' rows={4}/>
            <button>Done</button>
        </form>

    </div>
    </center>
  )
}
