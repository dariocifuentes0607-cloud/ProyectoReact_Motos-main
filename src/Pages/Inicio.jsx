import { useNavigate } from 'react-router-dom'
import ABC from '../asset/Home.jpg'
import Efecto from '../Componentes/Home/Efecto'
import '../Style/Inicio.css'

export default function Inicio(){
    const llevame = useNavigate();
    return(
        <div className='inicio'>
            <h1>Bienvenidos</h1>
            <Efecto
                src={ABC}
                onFin={() => llevame('/Tarjetas')}
            />
        </div>
    )
}