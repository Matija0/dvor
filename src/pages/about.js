import ImageComponent from '@/components/gsap/image';
import React from 'react';


const About=()=>{
    return(
        <div className='about bg-white'>
        <div className='container py-3 d-flex section-class'style={{height:"80vh"}}>
        <div className='mt-auto mb-auto'>
        <h1 className=" mt-5 heading">About us</h1>
        </div>
        </div>
                           
            
            <div className="container my-3 py-3">
            <div className="row">
               <div className='col-md d-flex bg-main'>
        <div className='m-auto'>
        <h3>Incididunt velit qui ipsum et.</h3> 
                    <p className='py-2'>Aliqua et aute mollit fugiat aliqua cillum laboris commodo. Adipisicing reprehenderit non occaecat anim consectetur irure irure reprehenderit enim. Sunt officia ex consequat id elit ullamco voluptate.</p>

        </div>
                </div> 
                <div className="col-md m-0 p-0">
<ImageComponent image={"https://lh3.googleusercontent.com/p/AF1QipNVkYg5vS1WR1aC0qfsVsRmcEGxBnjFr9SHLHcZ=s680-w680-h510"} width="100%"/>
                </div>
            </div>
            
        </div>
        </div>
    )
}



export default About