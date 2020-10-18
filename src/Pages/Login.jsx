import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
function Login(){
    const [data,Setdata]=useState({user:'',pass:''})
    const handlechange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        Setdata({
            ...data,
            [name]:value
        })

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
       
    }
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
        <br></br>
            <h1>Inicia sesi&oacute;n</h1>
            <form onSubmit={handlesubmit}>
                <TextField label="Nombre de usuario" variant="standard" value={data.user} name="user" onChange={handlechange} />
                <br></br>
                <TextField label="Contraseña" variant="standard" value={data.pass} name="pass" onChange={handlechange} />
                <br></br>
                <br></br><br/>
                <Button variant="contained" type="submit" color="primary">Aceptar</Button>
            </form>
        </div>
    )
}
export default Login;