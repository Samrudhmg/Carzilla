import React from 'react'
import './descriptionStyles.css'
import DiscriptionData from './DiscriptionData'

export default function disdata() {
    return (

        <center>
            <div className='heaven'>
                <h1>Heaven on wheels</h1>
                <p className='para1' >A car is a means of transport used for traveling from one place to another. This is a four-wheeler used by individuals or family members.
                    We all use cars in our daily lives to go from one place to another for work.
                    A car is a beautiful vehicle that has comfortable seats, AC, and windows.</p>

               <DiscriptionData cname='facts' images='bugimages' imgsrc1='bug1.jpg' imgsrc2='bug2.jpg' title='Bugatti Veyron'/>
               <DiscriptionData cname='factsrev'images='bugimagesrev' imgsrc1='koniii222222.jpg' imgsrc2='koniii.jpg' title='Koenigsegg Agera'/>


            </div>
        </center>
    )
}
