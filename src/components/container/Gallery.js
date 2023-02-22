import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery=()=>{

    return(<div className="container py-5 ">
        <div className="row">
        <div className="col-md-4 d-flex">
                <div className="m-auto">
                    <h1>Neki naslov</h1>
                    <p>Pragraf nakon naslova</p>
                </div>
            </div>
            <div className="col-md">
            <Carousel autoPlay={true} >
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg"/>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg"/>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg"/>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg"/>
            </div>
        </Carousel>
            </div>
           
        </div>
     
    </div>)
}

export default Gallery