

const SectionA =(props)=>{
    return(
        <div className="cotainer-fluid">
            <div className="row">
               <h3 className="col-md">{props.title}</h3> 
                <p className="col-md">{props.desc}</p>
            </div>
            <div className="row">
                <div className="cold-md">
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>
    )
}