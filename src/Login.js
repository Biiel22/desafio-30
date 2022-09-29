import { React, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {registerWithEmailAndPassword, logInWithEmailAndPassword} from './firebase-config.js'
import './Login.css'

export default function Login() {

    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState("")
    const [loginSenha, setLoginSenha] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newNome, setNewNome] = useState("")
    const [newSenha, setNewSenha] = useState(0)

    const registrar = () => {
        if(!newNome) alert("Coloque um nome")
        registerWithEmailAndPassword(newNome, newEmail, newSenha)
    }

    const entrar = async () => {
        var estado = false
        if(await logInWithEmailAndPassword(loginEmail, loginSenha) ){
            estado = true
        }else{
            estado = false
        }

        if(estado == true){
            navigate("/feed")
        }
    }


  return (

    <div className='mainLogin'>
            
            <form className='form'>
                <h1>Registrar</h1>
                <input placeholder='Email...' onChange={(event) => {setNewEmail(event.target.value);}} />
                <input placeholder='Nome...' onChange={(event) => {setNewNome(event.target.value);}} />
                <input type="" placeholder='senha...' onChange={(event) => {setNewSenha(event.target.value);}} />
                <button className="btn btn-primary" onClick={registrar}>Registrar</button>

                <h1>Entrar</h1>
                <input placeholder='Email...' onChange={(event) => {setLoginEmail(event.target.value);}} />
                <input type="" placeholder='senha...' onChange={(event) => {setLoginSenha(event.target.value);}} />
                <button onClick={entrar} className="btn btn-success">Entrar</button>
            </form>
        </div>
    )
}
