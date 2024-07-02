import "./input.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Input() {
    const url = "http://localhost:8080/atividade";
    const [tarefa, setTarefa] = useState("");

    const dados = {
        nome: tarefa,
        description: tarefa,
    };

    const adicionarTarefa = (e) => {
        e.preventDefault();
        const add = axios
            .post(url, dados)
            .then((response) => {
                console.log("Tarefa adicionada com sucesso!", response.data);
                setTarefa("");
                location.reload();
            })
            .catch((error) => {
                console.log("Erro ao adicionar tarefa: " + error);
            });

        add();

        const selecionarElemento = document.querySelector(".container-att");
        selecionarElemento.classList.add("slide-in-left");
    };

    useEffect(() => {
        console.log("Tarefa: ", tarefa);
    }, [tarefa]);

    return (
        <div className="container">
            <div className="input-tarefa">
                <form onSubmit={adicionarTarefa}>
                    <input
                        type="text"
                        value={tarefa}
                        placeholder="Adicionar uma tarefa"
                        className="input-tarefa"
                        onChange={(e) => setTarefa(e.target.value)}
                    />
                    <button className="adicionar" type="submit">
                        Adicionar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Input;
