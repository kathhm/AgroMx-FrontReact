import React from 'react'

function login() {
  return (
    <div>
        <div className='container-fluid'>
            <h1 className='titulo'>inicia sesión</h1> <hr/>
            <div className='container-fluid'>
                <form className='form'>
                    <label for="correo">correo electronico:</label>
                    <input type="text" placeholder="example@dominio.com" id="correo"/><br/>
                    <label for="contraseña">contraseña</label>
                    <input type="password" placeholder="introduce tu contraseña" id="contraseña"/>
                    <button type="submit">iniciar sesión</button>


                </form>
                
            </div>

        </div>
        

      
    </div>
  )
}

export default login
