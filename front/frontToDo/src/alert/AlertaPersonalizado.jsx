import "./alert.css";
import { useState } from "react";
/* eslint-disable react/prop-types */

function AlertaPersonalizado({ titulo }) {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(false);
        console.log("Fechou");
    };
    return (
        open && (
            <div className="fundo">
                <div className="alerta">
                    <h2>Atividade: {titulo}</h2>
                    <p>Criada com sucesso!! </p>
                    <button onClick={handleClick}>Fechar</button>
                </div>
            </div>
        )
    );
}

export default AlertaPersonalizado;
