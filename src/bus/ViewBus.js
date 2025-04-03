import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

export default function ViewUser(){

    const[bus,setBus] = useState({
        numBus:"",
        numPlac:"",
        fechCre:"",
        caracters:"",
        idMarcaBus:"",
        isActive:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/bus/${id}`);
        console.log(result.data);
        setBus(result.data);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h1>Detalles</h1>
                <div className="card">
                    <div className="card-header">
                       <b>ID : {bus.id}</b> 
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Numero de Bus: </b>
                                {bus.numBus}
                            </li>
                            <li className="list-group-item">
                                <b>Numero de Placa: </b>
                                {bus.numPlac}
                            </li>
                            <li className="list-group-item">
                                <b>Fecha de Creacion: </b>
                                {bus.fechCre}
                            </li>
                            <li className="list-group-item">
                                <b>Caracteristicas: </b>
                                {bus.caracters}
                            </li>
                            <li className="list-group-item">
                                <b>Marca: </b>
                                {bus.idMarcaBus.marcaBus}
                            </li>
                            <li className="list-group-item">
                                <b>Activo: </b>
                                { bus.isActive ? "Activo" : "Inactivo" }
                            </li>
                        </ul>
                    </div>
                </div>  
                <Link className="btn btn-primary my-2" to="/">Back to Home</Link>
            </div>
        </div>
    </div>
  )
};

