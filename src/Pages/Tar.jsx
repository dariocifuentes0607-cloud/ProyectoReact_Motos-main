import Tarjeta from '../Orquestador/Tarjeta'
import Boton2 from '../Componentes/Tarjetas/Boton2'
import B from '../asset/B.jpg'
import C from '../asset/C.jpg'

export default function Tar({tarjeta}) {
    return(
        <div>
            {tarjeta.map((moto)=>(
                <Tarjeta
                    key={moto.title}
                    title={moto.title}
                    descripcion={moto.descripcion}
                    img={moto.img}
                    color={moto.color}
                    precio={moto.precio}
                />
            ))}
            <Boton2 ruta="/Formulario" imagen={B} />
            <Boton2 ruta="/Contacto" imagen={C} />
        </div>
    )
}