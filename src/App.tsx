import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavBar';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import FormularioTema from './components/temas/formulariotema/FormularioTema';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';



axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


function App() {
  const [] = useState(0)

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartemas" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path='/postagens' element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        </Routes> 
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
