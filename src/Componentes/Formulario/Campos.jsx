export default function Campos({etiqueta, nombre, tipo, holder, valor, onCambio}){
    return(
        <div className="campo">
            <label htmlFor={nombre}>{etiqueta}</label>
            <input
            type={tipo} 
            id={nombre} 
            name={nombre} 
            placeholder={holder} 
            value={valor}
            onChange={onCambio}
            required
            />
        </div>

    )
}