import { Link } from 'react-router-dom'

export default function Boton2({ruta, imagen}){
    return(
        <div className="boton-imagen">
            <Link to={ruta}>
                <img src={imagen} alt="" />
            </Link>
        </div>
    )
}