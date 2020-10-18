import React from 'react'
import Data from './productos.json'
import { useParams } from 'react-router'
import Caracteristicas from '../Components/Caracteristicas'
function Detalle(){
    const {id}=useParams()
    return(
        <div>
           {
               Data.map(d=>{
                   if(d.id==id){
                       return(
                        <Caracteristicas 
                        name={d.name} 
                        price={d.price}
                        image={d.image}
                        screen={d.screen}
                        memory={d.memory}
                        detalles={d.details}
                        especification={d.especificas}
                        />
    
                       )
                   }
               })
           }
            <br></br>
            <br></br>
            
            <br></br>
            detalle
        </div>
    )
}
export default Detalle