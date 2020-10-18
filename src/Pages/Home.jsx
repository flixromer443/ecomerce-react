import React,{useEffect, useState} from 'react'
import OutlinedCard from '../Components/Producto'
import Data from './productos.json'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

function Home(){
    const [data,setData]=useState([])
    useEffect(()=>{
        console.log(Data)        
    },[])
    return(
        <div>
             <br></br>
             <br></br>
            {
                Data.map(d=>(
                    <section>
                    <Link to={`/pages/detalle/${d.id}`} p style={{textDecoration:"none"}}>
                    <OutlinedCard 
                        name={d.name} 
                        price={d.price}
                        image={d.image}
                        screen={d.screen}
                        memory={d.memory}
                        />
                    </Link>
                  
                   </section>
                ))
            }
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
        </div>
    )
}
export default Home;