import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import Catalogo from './data.json'
import Formulario from './Orquestador/Formulario'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      Catalogo.map((moto)=>(
        <Tarjeta
          title = {moto.title}
          descripcion = {moto.descripcion}
          img = {moto.img}
          color = {moto.color}
          precio = {moto.precio}
        />
      ))
    */}    
    <Formulario/>
  </StrictMode>,
)