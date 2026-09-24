import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Tarjetas/Titulo'
import Imagen from '../Componentes/Tarjetas/Imagen'
import Descripcion from '../Componentes/Tarjetas/Descripcion'
import Precio from '../Componentes/Tarjetas/Precio'

export default function Tarjeta({title,descripcion,img,color,precio}){
    return(
        <div className='CentrarC'>
            <div className='Centrar' style={{background: color}}>
                <Imagen
                    imga={img} /*Primero a donde lo voy a enviar, luego lo que recibo*/
                />
                <div className='Orde'>    
                    <Titulo
                        title={title}
                    />
                    <Descripcion
                        descripcion={descripcion}
                    />
                    <Precio
                        precio={precio}
                    />
                </div>
            </div>
        </div>     
    )
}