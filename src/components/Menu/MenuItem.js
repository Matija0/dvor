
const MenuItem=(props)=>{

    return(<div className="d-flex menu-item px-2 justify-content-between  py-2 ">
<div className="mt-auto mb-auto"><h6>{props.data.name}</h6>
<span className="">{props.data.subtitle}</span>
<br/>
{ props.data.has_sub? props.data.sub.map((val,i)=>(
    <span key={i} className=" sub-menu-item">#{val.title}</span>
)):null}

</div>
<div className="ml-auto p-3">
    <p >{props.data.price} €</p>
    <small className="sub-menu-item">({props.data.price * 7.53450}kn)</small>
    </div>
    </div>)
}

export default MenuItem