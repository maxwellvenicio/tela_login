//import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css"

function Login() {
  //variaveis de estados
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //funcao para envio do formulario (atribuido no formulario)
  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Dados enviados:' + username + " - " + password);
    
   // console.log(username, password);
   // console.log("Envio");
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>

          <div className='input-field'>
            <input type="email" placeholder='E-mail' 
            /*funcao*/ onChange={(e)=> setUsername(e.target.value)} />
            <FaUser className='icon' />
          </div>

          <div className='input-field'>
            <input type="password" placeholder='Digite sua senha' 
            /*funcao*/ onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icon' />
          </div>

          <div className='recall-forget'>
            <label htmlFor="">
              <input type="checkbox"  />
              Lembre-me
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button>Login</button>

          <div className='signup-link'>
            <p>Não tem uma conta? <a href="#">Registrar </a>

            </p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login;
