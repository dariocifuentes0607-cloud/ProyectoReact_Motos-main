import '../Style/Formulario.css'
import Campos from '../Componentes/Formulario/Campos'
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from '../Orquestador/Tarjeta'



const Entradas = [
    {nombre:"Moto",tipo:"text",holder:"Nombre de la moto"},
    {nombre:"Imagen",tipo:"text",holder:"Imagen de referencia"},
    {nombre:"Descripcion",tipo:"text",holder:"Descripcion de la moto"},
    {nombre:"Color",tipo:"text",holder:"Color de la moto"},
    {nombre:"Precio",tipo:"number",holder:"Presupuesto aproximado para la moto"}
]

export default function Formulario({datos, onCambio, onEnviar, onReset, onVolver}) {
    const Botones=[
        {tipo:"submit",nombre:"Enviar"},
        {tipo:"button",nombre:"Volver", onClick:onVolver},
        {tipo:"reset",nombre:"Reset"}
    ]
    return(
        <div>
            <form className="formulario" onSubmit={onEnviar} onReset ={onReset}>
                {Entradas.map((campo)=>(
                    <Campos
                        key={campo.nombre}
                        etiqueta={campo.nombre}
                        nombre={campo.nombre}
                        tipo={campo.tipo}
                        holder={campo.holder}
                        valor={datos[campo.nombre]}
                        onCambio={onCambio}
                    />
                ))}
                {Botones.map((boton)=>(
                        <Boton
                        key={boton.nombre}
                        tipo={boton.tipo}
                        nombre={boton.nombre}
                        onClick ={boton.onClick}
                    
                        />
                    ))}
            </form>
            <Tarjeta
                title={datos.Moto}
                descripcion={datos.Descripcion}
                img={datos.Imagen}
                color={datos.Color}
            />
        </div>
    )
}