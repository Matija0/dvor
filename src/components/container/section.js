import ImageComponent from "../gsap/image"

const Section = (props)=>{
    return(
        <div className="container my-4 d-flex py-4 ">
            <div className={props.right?"row justify-content-end bg-main":"row bg-main"}>
                <div className="col-md-4 p-0 " >
                    <ImageComponent width={"100%"}  image={props.img}/>
        
                </div>
                <div className="col-md bg-main px-4 d-flex">
                  
                    <div className="m-auto ">
                        <h1>{props.title}</h1>
                        <p className="py-2">{props.desc}</p>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Section