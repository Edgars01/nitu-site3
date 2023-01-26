import React from 'react'
import '../../component-style/Products.css';

const Productbox = (props) => {
  return (
    <div className='a-box'>

        <div className="a-b-img">
            <img src={props.image} alt='' />
        </div>

        <div className="a-b-text">
            <h2> {props.title} </h2>
            <br />
            <button className='productbox-button'>BUY NOW</button>
        </div>

    </div>
  )
}

export default Productbox