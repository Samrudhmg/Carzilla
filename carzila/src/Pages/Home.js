import React from 'react'
import Hero from '../Components/Hero'
import Discription from '../Components/Discription'
import Jdm from '../Components/Jdm'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        
        <Hero clname='hero'  btnclassname='btnclass' src='wallpaperflare.com_wallpaper (1).jpg' text='The cars we drive say a lot about us' para='Pick a ride for yourself' button='check it out'/>
        <Discription/>
        <Jdm/>
        <Footer/>
        
            </div>
  )
}
