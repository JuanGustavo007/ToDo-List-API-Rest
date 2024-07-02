import { useState } from "react";
import axios from "axios";
import "./atualizar.css";

/* eslint-disable react/prop-types */

function AtualizarAtividadeForm({ nome, description, item, atualizar }) {
    const [titulo, setTitulo] = useState(nome);
    const [descricao, setDescricao] = useState(description);
    const [id, setId] = useState(item);

    const handleAtualizar = (e) => {
        const elementoPai = e.target.parentNode;
        const idAtividade = elementoPai.querySelector(".escondido");
        console.log(idAtividade.value);
        setId(idAtividade.value);
        atualizar();
        location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8080/atividade/${id}`, { nome: titulo, description: descricao })
            .then((response) => {
                // Trate a resposta da atualização aqui
                console.log("Atividade atualizada com sucesso:", response.data);
            })
            .catch((error) => {
                // Trate erros aqui
                console.error("Erro ao atualizar atividade:", error);
            });
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <div>
                <input type="hidden" value={item} className="escondido" />
                <div>
                    <label htmlFor="titulo">Título:</label>
                </div>

                <input id="titulo" value={titulo} type="text" onChange={(e) => setTitulo(e.target.value)} />
            </div>

            <div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                </div>
                <input id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>

            <button type="submit" onClick={handleAtualizar}>
                Atualizar
            </button>
        </form>
    );
}

export default AtualizarAtividadeForm;
