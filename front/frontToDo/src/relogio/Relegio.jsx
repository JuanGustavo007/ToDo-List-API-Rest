import { useState, useEffect } from "react";
import "./relogio.css";

function Relogio() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const changeTime = () => {
        setHora(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        const timerId = setInterval(changeTime, 1000);

        return () => clearInterval(timerId); // Limpa o intervalo quando o componente é desmontado
    }, []);
    return (
        <div>
            <div className="horas">{hora}</div>
        </div>
    );
}
export default Relogio;
