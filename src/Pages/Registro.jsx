import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
function Registro(){
    const [data,setData]=useState({name:'',email:'',phone:'',user:'',pass:'',cpass:''})
    const handlesumit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const handlechange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        console.log(data.cpass)
        setData({
            ...data,
            [name]:value
        })
    }
    return(
        <div>
            <br></br>
             <br></br>
             <br></br>
           <h1>Registrate</h1>
            <form>
            <TextField label="Nombre y apellido" variant="standard" name="name" value={data.name} onChange={handlechange} />
            <br></br>
            <TextField label="***@gmail.com" variant="standard" name="email" value={data.email} onChange={handlechange}/>
            <br></br>
            <TextField label="Telefono" variant="standard" name="phone" value={data.phone} onChange={handlechange}/>
            <br></br>
            <TextField label="Nombre de usuario" variant="standard" name="user" value={data.user} onChange={handlechange}/>
            <br></br>
            <TextField label="Contraseña" variant="standard" name="pass" value={data.pass} onChange={handlechange} />
            <br></br>
            <TextField label="Confirmar contraseña" variant="standard" name="cpass" value={data.cpass} onChange={handlechange}/>
            <br></br><br/>
            <Button variant="contained" color="primary" type="submit" onClick={handlesumit}>Aceptar</Button>
            </form>
        </div>
    )
}
export default Registro;