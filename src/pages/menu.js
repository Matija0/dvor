import MenuItem from '@/components/Menu/MenuItem';
import React, { useState } from 'react';
import {Deserti, Food, MesniMeni, RibljiiMeni} from "../utils/constants"
const Menu=()=>{

const [type,setType]= useState("Predjelo")

const data_selected=()=>{

    switch(type){
        case "Predjelo":
            return (
                <>
                 <div className='col-md my-3 border-bottom'>   
            <h2 className='my-3'>{type}</h2>
            {Food.map((item,index)=>(
            <MenuItem  data={item} key={index}/>
            ))}</div></>
            )
case "Mesni meni":
    return (
        <>
         <div className='col-md my-3 border-bottom'>   
    <h2 className='my-3'>{type}</h2>
    {MesniMeni.map((item,index)=>(
    <MenuItem  data={item} key={index}/>
    ))}</div></>
    )
    case "Riblji meni":
    return (
        <>
         <div className='col-md my-3 border-bottom'>   
    <h2 className='my-3'>{type}</h2>
    {RibljiiMeni.map((item,index)=>(
    <MenuItem  data={item} key={index}/>
    ))}</div></>
    )
    case "Deserti":
        return (
            <>
             <div className='col-md my-3 border-bottom'>   
        <h2 className='my-3'>{type}</h2>
        {Deserti.map((item,index)=>(
        <MenuItem  data={item} key={index}/>
        ))}</div></>
        )
    }
}





    return(
        <div className='container '>
        <div className='container py-3 d-flex section-class'style={{height:"80vh"}}>
        <div className='mt-auto mb-auto'>
        <h1 className=" mt-5 heading">Menu</h1>
        </div>
        </div>
            <div className=' p-1 px-3'>
        <div className='row my-4 py-4 bg-gray  '>
        <div className='col-md-3 mt-5 pt-4'>  
        <li className={type==="Predjelo"?"active-filter-item":"filter-item"}  onClick={()=> setType("Predjelo")}>Predjelo</li> 
        <li className={type==="Mesni meni"?"active-filter-item":"filter-item"}  onClick={()=> setType("Mesni meni")}>Mesni meni</li> 
        <li className={type==="Riblji meni"?"active-filter-item":"filter-item"} onClick={()=> setType("Riblji meni")}>Riblji meni</li> 
        <li className={type==="Deserti"?"active-filter-item":"filter-item"} onClick={()=> setType("Deserti")}>Deserti</li> 
            </div>
           {data_selected()}
         
         
        </div>
      
        </div>
        </div>
    )
}

export default Menu