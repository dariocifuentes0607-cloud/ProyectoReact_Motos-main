import { useState } from 'react'
import Campos from '../Componentes/Formulario/Campos'
import Boton from '../Componentes/Formulario/Boton'
import Boton2 from '../Componentes/Tarjetas/Boton2'
import B from '../asset/B.jpg'

const Entradas = [
    {nombre:"Nombre",tipo:"text",holder:"Tu nombre"},
    {nombre:"Correo",tipo:"email",holder:"correo@ejemplo.com"},
    {nombre:"Telefono",tipo:"tel",holder:"Tu telefono"},
    {nombre:"Mensaje",tipo:"text",holder:"Escribe tu mensaje"}
]

const inicial = {Nombre:"", Correo:"", Telefono:"", Mensaje:""}

export default function FormularioContacto(){
    const [datos, setDatos] = useState(inicial)

    const cambiar = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }

    const enviar = (e) => {
        e.preventDefault()

        // Si algún campo está vacío o solo tiene espacios, no envía
        const hayVacios = Object.values(datos).some(
            (valor) => valor.trim() === ""
        )

        if (hayVacios) {
            alert("Completa todos los campos antes de enviar")
            return
        }

        console.log("Contacto enviado:", datos)
        alert("Mensaje enviado")
        setDatos(inicial)
    }

    return(
        <div className="formulario">
            <h2>Contacto</h2>
            <form onSubmit={enviar}>
                {Entradas.map((campo)=>(
                    <Campos
                        key={campo.nombre}
                        etiqueta={campo.nombre}
                        nombre={campo.nombre}
                        tipo={campo.tipo}
                        holder={campo.holder}
                        valor={datos[campo.nombre]}
                        onCambio={cambiar}
                    />
                ))}
                <Boton tipo="submit" nombre="Enviar" />
            </form>
            <Boton2 ruta="/Tarjetas" imagen={B} />
        </div>
    )
}