import React, { useEffect, useState } from "react"

export default function Home() {

    const [bus, setBus] = useState([])
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1); 
    const limit = 5;
    useEffect(() => {
        loadBus();
    }, [page]);

    const loadBus = async () => {
        try {
            const response = await fetch(`http://localhost:8080/bus?page=${page}&size=${limit}`);
            const data = await response.json();
            setBus(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error al obtener los datos del bus:", error);
        }
    };



    return (
        <div className="container">
            <div className="py-4">
                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nº de Bus</th>
                            <th scope="col">Nº de Placa</th>
                            <th scope="col">Fecha Creacion</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bus.map((bus, id) => (
                                <tr>
                                    <th scope="row" key={id}>{bus.id}</th>
                                    <td>{bus.numBus}</td>
                                    <td>{bus.numPlac}</td>
                                    <td>{bus.fechCre}</td>
                                    <td>{bus.caracters}</td>
                                    <td>{bus.idMarcaBus.marcaBus}</td>
                                    <td>{bus.active ? "✅" : "❌"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                    Anterior
                </button>
                <span> Página {page + 1} de {totalPages} </span>
                <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
                    Siguiente
                </button>
            </div>
        </div>
    )
};

