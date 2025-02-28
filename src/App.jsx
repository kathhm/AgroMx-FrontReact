import '@fontsource/gabriela'
import '@fontsource/mako'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { SobreNosotros } from './pages/SobreNosotros/SobreNosotros'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './pages/Inicio'
import Comunidad from './pages/Comunidad/Comunidad'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* <Inicio></Inicio> */}
        <Routes>
          <Route path="/SobreNosotros" element = {<SobreNosotros/>} />
          <Route path="/Inicio" element = {<Inicio/>}></Route>
          <Route path="/" element = {<Inicio/>}></Route>
          <Route path="/Comunidad" element = {<Comunidad/>}></Route> 
        </Routes>

        <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App
