export default function Boton({tipo,nombre,onClick}){
    return(
        <div>
        <button 
            className="boton"
            type ={tipo}
            onClick={onClick}
            >
            {nombre}
        </button>    
        </div>  
    );
}