
import "./login.css"

function login() {
  return (
    // <div>
    <main>
        <div className='container login-card p-5 text-center mt-5 mx-5'>
            <h1 className='titulo'>inicia sesión</h1> <hr/>
            <div className='container-fluid justify-content-center d-flex'>
                <form className='form col-8 row'>
                    <label className="etiqueta me-2 form-label text-align-start" for="correo">correo electronico:</label>
                    <input className="form-control" type="text" placeholder="example@dominio.com" id="correo"/><br/>
                    <label className="etiqueta me-2 form-label text-align-start" for="contraseña">contraseña</label>
                    <input className="form-control" type="password" placeholder="introduce tu contraseña" id="contraseña"/>
                    <button className="btn custom-btn w-50 mt-5" type="submit">iniciar sesión</button>


                </form>
                
            </div>

        </div>
        

      
    {/* </div> */}
  </main>
)
}

export default login
