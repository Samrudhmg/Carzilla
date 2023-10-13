import React from 'react'
import { Component } from 'react'
import './descriptionStyles.css'


class DiscriptionData extends Component {
    render() {
        


        return (
            <div className={this.props.cname}>
            <div className='facts-data'>
                <h2>{this.props.title}</h2>
                <p className='para2'>After Volkswagen acquired Bugatti in 1998, the brand produced only two series - Veyron and Chiron. Only 500 units of Chiron were made, which got sold within five years of production.

                    Buying pre-owned luxury cars is can be a desire for many. There are various significant benefits of buying a used luxury car that should be known to all.
                    Car Giant offers superior quality pre-owned luxury vehicles at affordable prices. Car Giant is here to assist you with a wide range of hand-selected pre-owned luxury cars belonging to premium brands.
                    Our team will help you to cruise away with your dream car!</p>
            </div>
            <div className={this.props.images}>
            <img alt='bugatti' src={this.props.imgsrc1}/>
            <img  alt='bugatti' src={this.props.imgsrc2} />
            </div>
          
        </div>

    
  )
    }
}

export default DiscriptionData