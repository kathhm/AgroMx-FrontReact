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


function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/SobreNosotros" element = {<SobreNosotros/>} />
        </Routes>

        <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App
