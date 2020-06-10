import React from 'react'
import {App} from '../App.css'

function AllNotes({data,clickCheckBox,handleDelete,handleEdit}) {
   
    return (
        <div className="allNotes">
         {data.map(dat=>{
             return (
                 <div className="singleNote" key={dat.id}>
                    <div className= {dat.status ? "flexgar statusChange" : "flexgar"}>
                            <p>{dat.book}</p>
                            <p>{dat.date}</p>
                        <div className="editDel">
                            <span onClick = {()=>handleDelete(dat.id)}><i class="fa fa-trash" aria-hidden="true"></i></span>
                           <span onClick = {()=>handleEdit(dat.id)}> <i class="fa fa-pencil" aria-hidden="true"></i></span>
                        </div>
                        <span> <input type="checkbox" onClick={()=>clickCheckBox(dat.id)} className="checkin"/></span>
                    </div>
                   
                 
                </div>
               
             )
         })}
        </div>
    )
}

export default  AllNotes
