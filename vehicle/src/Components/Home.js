import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      
      <Carousel interval={10000} fade> {}
        <Carousel.Item>
          <img className="d-block w-100" src="c4.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="c2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item>
          <img className="d-block w-100" src="c5.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="c3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="c6.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export default Home;
