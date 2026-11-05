import Tar from './Tar'
import FormularioPage from './FormularioPage'
import FormularioContacto from '../Orquestador/FormularioContacto'
import Inicio from './Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useTarjetas from '../Hook/useTarjetas'

export default function App() {
    const {tarjeta, agregar} = useTarjetas()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Tarjetas" element={<Tar tarjeta={tarjeta} />} />
                <Route path="/Formulario" element={<FormularioPage agregar={agregar} />} />
                <Route path="/Contacto" element={<FormularioContacto/>} />
            </Routes>
        </BrowserRouter>
    )
}