/* eslint-disable react/prop-types */

function Feitas({ feitas }) {
    const arrFeitas = Array.from(feitas);
    console.log(arrFeitas);
    return (
        <div>
            <h2>Atividades feitas:</h2>
            <ul>
                {arrFeitas.map((item) => (
                    <li key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.nome}</p>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feitas;
