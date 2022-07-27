import Carousel from 'react-bootstrap/Carousel'
import home from './photos/home.png'
import grout from './photos/grout.png'
import information from './photos/information.png'
import resultsPage from './photos/resultsPage.png'

const Gallery = () => {
    return (
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={resultsPage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={grout}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={information}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}
 
export default Gallery;