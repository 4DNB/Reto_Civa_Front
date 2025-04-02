import React, { useEffect, useState } from "react"

export default function Home() {

    const [bus, setBus]=useState([])

    useEffect(()=>{
        loadBus();
    },[]);

    const loadBus = async () => {
        try {
            const response = await fetch("http://localhost:8080/bus");
            const data = await response.json();
            console.log(data);
            setBus(data);
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
                            bus.map((bus,id)=>(
                                <tr>
                                    <th scope="row" key={id}>{id+1}</th>
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
            </div>
        </div>
    )
};

