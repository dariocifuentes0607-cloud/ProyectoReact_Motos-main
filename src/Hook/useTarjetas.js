import { useState } from "react";
import Cafe from '../data.json'

export default function useTarjetas() {
    const [tarjeta, setTarjeta] = useState(Cafe)
    const agregar=(nueva)=>setTarjeta([...tarjeta, nueva])
    return { tarjeta, agregar }
}