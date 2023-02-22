const IntroContainer=()=>{
    return(
        <div className="header-intro">
       <video className="intro-video" autoPlay playsInline muted loop >
        <source type="video/mp4" src="https://player.vimeo.com/external/396488032.sd.mp4?s=9cd85a89fd00a5ba73d918560ef1bcb2aed15540&profile_id=164"></source>
       </video>

       <div className="section-header">
        <div className="section-overlay">
            <div className="d-flex h-100">
                <div className="m-auto">
                    <h1 className="text-white">Dobrodošli u restoran dvor</h1>
                    <small className="text-light">neki podnaslovS</small>
                </div>
            </div>
        </div>
       </div>
        </div>
    )
}

export default IntroContainer