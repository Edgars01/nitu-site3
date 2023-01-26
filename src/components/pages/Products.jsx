import React from 'react'
import '../../component-style/Products.css';
import Productbox from './Productbox';
import product1 from './images/product1.jpg';



const Products = (props) => {
  return (
    <div id='products'>
        
        <h1>HEADING</h1>
        <br />
        <p>text text</p>

        <div className="a-container">
            
        <Productbox image={product1} title='adsadsadsd' />
        <Productbox image={product1} title='5675675' />
        <Productbox image={product1} title='zxczxc' />


        </div>

    </div>
  )
}

export default Products