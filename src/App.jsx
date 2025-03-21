import '@fontsource/gabriela'
import '@fontsource/mako'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Carrito from './pages/Carrito/Carrito'
import Catalogo from './pages/Catalogo/Catalogo'
import { Comunidad } from './pages/Comunidad/Comunidad'
import DetallesProducto from './pages/DetallesProducto/DetallesProducto'
import { DeveloperTeam } from './pages/DeveloperTeam/DeveloperTeam'
import Inicio from './pages/Inicio'
import NuevosProductos from './pages/Productos/NuevosProductos'
import Registro from './pages/Registro/Registro'
import { SobreNosotros } from './pages/SobreNosotros/SobreNosotros'
import CarritoProvider from './pages/CarritoContexto'
import Login from './pages/login/Login'
import 'normalize.css'



function App() {


  return (
    <>
      <CarritoProvider>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Inicio" element={<Inicio />}></Route>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/Comunidad" element={<Comunidad />} />
            <Route path="/NuevosProductos" element={<NuevosProductos />}></Route>
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:id" element={<DetallesProducto />} />
            <Route path="/Registro" element={<Registro />}></Route>
            <Route path="/DetallesProducto" element={<DetallesProducto />} />
            <Route path="/DeveloperTeam" element={<DeveloperTeam />} />
            <Route path="/Carrito" element={<Carrito />} />


          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </CarritoProvider>
    </>
  )
}

export default App
