// pages/index.js ou src/app/ComponenteAtividade.jsx
/* eslint-disable */
"use client"; // Adicione esta linha

import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Atividade.css";
import Input from "../inputAtividade/Input";
import AtualizarAtividadeForm from "../ativdades/AtualizarTarefa";
import Relogio from "../relogio/Relegio";
import Feitas from "../feitas/Feitas";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [conunt, setCount] = useState(0);
    const [checkbox, setCheckbox] = useState(true);
    const [atualizar, setAtualizar] = useState(false);
    const [feitas, setFeitas] = useState(new Set());

    useEffect(() => {
        axios
            .get("http://localhost:8080/atividade") // Se configurou o proxy
            .then((response) => {
                setData(response.data);
                setLoading(false);
                setCount(response.data.content.length);
                console.log(response.data.content);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/atividade") // Se configurou o proxy
            .then((response) => {
                setData(response.data);
                setLoading(false);
                setCount(response.data.content.length);
                console.log(response.data.content);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [atualizar]);

    const att = () => {
        setAtualizar(true);
        console.log(atualizar);
        console.log(data.content);
    };

    const handleCheckbox = (e) => {
        setCheckbox((prev) => !prev);
        console.log(checkbox);
        console.log(e.target.parentNode);
        const elementoPai = e.target.parentNode;
        const idAtividade = elementoPai.querySelector("#id-atividade").textContent;
        const textoAtividade = elementoPai.querySelector(".att").textContent;
        const idTratado = idAtividade.split(" - ")[0];
        setFeitas((prev) => prev.add({ id: idTratado, nome: textoAtividade }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleRemove = (e) => {
        const elementoPai = e.target.parentNode;
        const idAtividade = elementoPai.querySelector("#id-atividade").textContent;
        console.log(idAtividade[0]);

        axios
            .delete(`http://localhost:8080/atividade/${idAtividade[1]}`)
            .then((response) => {
                console.log(response.data);
                setCount((prev) => prev - 1);
                location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {/* <Feitas feitas={feitas} /> */}
            <div className="container">
                <div className={"todo-list-container"}>
                    <h1 className="title">TODO LIST API REST</h1>
                    <div className="qtd">
                        <Relogio></Relogio>
                        <p>Tarefas: {conunt}</p>
                    </div>
                    <Input />
                </div>
                <>
                    <>
                        <div className="container-att">
                            {data.content.map((item) => (
                                <div className="todo-list  " key={item.id}>
                                    <div className="task " key={item.id}>
                                        <div>{checkbox}</div>
                                        <input type="checkbox" id="task1" value={checkbox} onChange={handleCheckbox} />
                                        <div id="id-atividade"> {item.id} - </div>
                                        <label htmlFor="task1" className="att">
                                            {item.nome}
                                        </label>

                                        <button className="remover" onClick={handleRemove}>
                                            Remover atividade
                                        </button>
                                    </div>
                                    <>
                                        <AtualizarAtividadeForm
                                            atualizar={att}
                                            nome={item.nome}
                                            description={item.description}
                                            item={item.id}
                                        ></AtualizarAtividadeForm>
                                    </>
                                </div>
                            ))}
                        </div>
                    </>
                </>
            </div>
        </>
    );
}
