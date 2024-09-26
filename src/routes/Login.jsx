import React from 'react';
import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { LoginStyle } from '../css/LoginStyle'

const Login=()=>{

    //Hook-useRef- pega a referencia de um componente ou elemento do DOM
    const usuario =useRef();
    const senha =useRef();

    //Hook-useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]=useState([]);

    //Hook - useNavigate - redireciona para o componente
    const navigate = useNavigate();

    //criando validação de login

    function validade(){
        for(let i =0; i <usuarios.length; i++){
            if(
                usuarios[i].usuario ==usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }

    //criando a função handleSubmit

    const handleSubmit =(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();
        if(validade()){
            //criando a autenticação 
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                //chama o componente dashboard ao logar corretamente.
                navigate("/Dashboard")       
        }else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook- useEffect vai buscar os dados para o login

    useEffect(()=>{
        //url que o json server criou (API)
        fetch("http://localhost:5000/usuarios/")
        //promise
        .then((res)=>{
            return res.json();
        })
        //setUsuarios recebe as alterações 
        .then((res)=>{
            setUsuarios(res);
        })
        //retorna um array vazio
    },[])

    return (
    <LoginStyle>
    <header className='main-container'>
        <div className="login-container">
            <div className="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Digite seu email" ref={usuario}/>
                </div>
                <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" ref={senha}/>
                </div>
                <button className="login-button" type="submit">Entrar</button>
            </form>
            <div className="forgot-password">
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
            </div>
        </div>
      </header>
      </LoginStyle>
    );
  };
  
  export default Login;