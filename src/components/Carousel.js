import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";

import "../component-style/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

import image from '../components/pages/images/product1.jpg';

const customers = [
    {
        name: "heading 1",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "../components/pages/images/product1.jpg"
    },
    {
        name: "heading 2",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "src/components/pages/images/product1.jpg"
    },
    {
        name: "heading 3",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "src/components/pages/images/product1.jpg"
    },
];

export const Slider = () => {

    return (

        <Container className="customers-container">
            
            <h2 className="customers-container-heading">Happy Customers</h2>
            
            <Carousel className="customers-carousel-container">
                
                {customers.map((data, i) => (
                    
                    <Carousel.Item className="customers-carousel-item">
                        
                        <Image className="customers-carousel-img" src={image} alt={data.link} />
                        
                        <Carousel.Caption className="customers-carousel-caption">

                            <h5 className="customers-caption-title">{data.name}</h5>
                            
                            <p>
                                <q>
                                    {data.content}
                                </q>
                            </p>

                        </Carousel.Caption>

                    </Carousel.Item>
                ))}

            </Carousel>

        </Container>
    );
}

export default Slider;