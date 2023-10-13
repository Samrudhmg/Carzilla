import './JdmStyle.css'
import Jdmdata from './Jdmdata'
import React from 'react'

export default function Trip() {
  return (
    <center>
    <div className='newjdmfile'>
      
    <h1>This is the JDM's</h1>
            <p>Japanese domestic market (JDM) refers to Japan's home market for vehicles and vehicle parts. 
                Japanese owners contend with a strict motor vehicle inspection and grey markets. 
                The average age of JDM cars is 8.7 years, ranking 9th in a survey of 30 of the top 50 countries by gross domestic product.</p>
     <div className='jdmimages'>
        <Jdmdata
          heading='Supra'  jdmsrc='./supra.jpg'   data='As we mentioned before, the Supra is a highly reliable machine as a whole. Coming to the engine now, the car was offered two engine options, a naturally aspirated 3.0-liter 2JZ-GE, and a twin-turbo 2JZ-GTE. Right in its stock form, the naturally aspirated motor can handle as many as 300 horses.'

        />
        <Jdmdata
          heading='GTR-34'  jdmsrc='./gtr.jpg'   data='Produced from 1999 to 2002, the R34 GT-R took everything that was great about the previous models and elevated it to new heights. With advanced features like all-wheel drive, four-wheel steering, and a twin-turbocharged engine, the R34 GT-R quickly became a legend in the world of performance cars.'

        />
        <Jdmdata
          heading='Mazda RX-7'  jdmsrc='./mazda.jpg'  data='The Mazda RX-7 is a front-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 until 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.'

        />
        </div>
        
    </div>
    </center>
  )
}
