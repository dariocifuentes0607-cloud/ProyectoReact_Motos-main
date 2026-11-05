import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inicial = { Moto: "", Imagen: "", Descripcion: "", Color: "", Precio: "" }

export default function useFormulario({ agregar }) {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(inicial)

    const cambiar = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    const enviar = (e) => {
        e.preventDefault()

        // Si algún campo está vacío o solo tiene espacios, no agrega la tarjeta
        const hayVacios = Object.values(datos).some(
            (valor) => String(valor).trim() === ""
        )

        if (hayVacios) {
            alert("Completa todos los campos antes de enviar")
            return
        }

        agregar({
            title: datos.Moto,
            descripcion: datos.Descripcion,
            img: datos.Imagen,
            color: datos.Color,
            precio: datos.Precio,
        })
        navigate('/Tarjetas')
    }

    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: () => setDatos(inicial),
        onVolver: () => navigate('/Tarjetas')
    }
}