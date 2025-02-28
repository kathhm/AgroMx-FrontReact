
import "./login.css"

function Login() {
  return (
    // <div>
    <main className="container">
        <div className='container login-card my-5 p-5'>
            <h1 className='titulo text-center'>Inicia sesión</h1> <hr/>
            <div className='container-fluid justify-content-center d-flex'>
                <form className='form col-8 row'>
                    <label className="etiqueta me-2 form-label text-align-start" htmlFor="correo">Correo electronico:</label>
                    <input className="form-control" type="text" placeholder="example@dominio.com" id="correo"/><br/>
                    <label className="etiqueta me-2 form-label text-align-start" htmlFor="contraseña">Contraseña:</label>
                    <input className="form-control" type="password" placeholder="introduce tu contraseña" id="contraseña"/>
                    <button className="btn btn-primary w-100 addToCartBtn mt-3" type="submit">iniciar sesión</button>
                </form>
                
            </div>

        </div>
        

      
    {/* </div> */}
  </main>
)
}

export default Login
