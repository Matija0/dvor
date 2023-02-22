import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const GalleryFood=()=>{

    return(<div className="container py-5">
           <Carousel showThumbs={false} autoPlay={true} >
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
     
    </div>)
}

export default GalleryFood