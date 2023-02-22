import {Red, White} from "../utils/constants"
import CardItem from '@/components/Menu/CardItem';
import React, { useState } from 'react';

const VineCard=()=>{
    const [type, setType]= useState("Red")

    const data_selected=()=>{
            switch(type){
            case "Red":
            return (
                <>
                 <div className='col-md my-3 border-bottom'>   
            <h2 className='my-3'>{type}</h2>
            {Red.map((item,index)=>(
            <CardItem  data={item} key={index}/>
            ))}</div></>
            )
            case "White":
            return (
                <>
                 <div className='col-md my-3 border-bottom'>   
            <h2 className='my-3'>{type}</h2>
            {White.map((item,index)=>(
            <CardItem  data={item} key={index}/>
            ))}</div></>
            )
    }
}
return(
    <div className=''>
   <div className="wine-bg">
   <div className='container py-3 d-flex section-class'style={{height:"80vh"}}>
    <div className='mt-auto mb-auto'>
    <h1 className=" mt-5 heading text-white">Vine Card</h1>
    </div>
    </div>
   </div>
    <div className='container p-1 px-3'>
    <div className='row my-4 py-4 bg-gray  '>
    <div className='col-md-3 mt-5 pt-4'>  
    <li className={type==="Red"?"active-filter-item":"filter-item"}  onClick={()=> setType("Red")}>Red</li> 
    <li className={type==="White"?"active-filter-item":"filter-item"}  onClick={()=> setType("White")}>White</li> 
    
        </div>
       {data_selected()}
     
     
    </div>
  
    </div>
    </div>
)

}

export default VineCard;