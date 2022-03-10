import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import "./css/vehiculos.css"
import F_entrada from '../formulario_v/F_entrada';
const Vehiculos = () => {

    const dispatch = useDispatch()
    const vista = useSelector(state =>state.vista);
    const [puestosv, setpuestosv] = useState([])
    const [puestosm, setpuestosm] = useState([])
    const [puestosb, setpuestosb] = useState([])
    let cantidad_pv = 20;
    let cantidad_pm = 40;
    let cantidad_pb = 20;
    const dd = []
    const dm = []
    const db = []
    const form = (id,tipo) => {
        console.log("id: "+id+"tipo :"+tipo)

        const obj = new Object();
        obj.id = id;
        obj.tipo = tipo;
        dispatch({
            type: "@c_vehiculo",
            c_vehiculo:obj
        })
        
        dispatch({
            type: "@c_vista",
            vista:1
        })
    }
    const cargarv = () => {
        for (var i = 0; i < cantidad_pv; i++) {
            let datos = {
                id: i + 1,
                estado: false,
            }
            dd.push(datos);
            setpuestosv(dd)
        }
    }
    const cargarm = () => {
        for (var i = 0; i < cantidad_pm; i++) {
            let datos = {
                id: i + 1,
                estado: false,
            }
            db.push(datos);
            setpuestosm(db)
        }
    }
    const cargarb = () => {
        for (var i = 0; i < cantidad_pb; i++) {
            let datos = {
                id: i + 1,
                estado: false,
            }
            dm.push(datos);
            setpuestosb(dm)
        }
    }
    console.log(vista)
    useEffect(() => {
        cargarb();
        cargarm();
        cargarv();
    }, [])

    console.log(puestosm)
    return (
        <div className="box container">
            {vista === true ?
                    <div className="row">
                    <div className="col-3 text-center">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>Entrada</h3>
                    </div>
                    <div className="col-8">
                        <div className="v-box">
                            {puestosv.length > 0 ?
                                puestosv.map(h =>
                                    <a onClick={()=>form(h.id,1)} key={h.id} >
                                    <div className={h.estado?"border text-center v-box-false":"border text-center"}  >
                                        <i className="fa-solid fa-car"></i>
                                        <h1>{h.id}</h1>
                                    </div>
                                    </a>
                                )
                                :
                                <h1>Cargando datos....</h1>
                            }
                        </div>
                        <div className="enter text center">
                            <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </div>
                        <div className="b-box">
                            {puestosv.length > 0 ?
                                puestosb.map(h =>
                                    <a onClick={()=>form(h.id,2)} key={h.id} >
                                    <div className={h.estado?"border text-center v-box-false":"border text-center"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
                                            <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                                        </svg>
                                        <h1>{h.id}</h1>
                                    </div>
                                    </a>
                                )
                                :
                                <h1>Cargando datos....</h1>
                            }
                        </div>
                        <div className="enter text center">
                            <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </div>
                        </div>
                        
                        <div className="m-box">
                            {puestosv.length > 0 ?
                                puestosm.map(h =>
                                    <a onClick={()=>form(h.id,3)} key={h.id} >
                                    <div className={h.estado?"border text-center v-box-false box":"border text-center box"}>
                                        <i className="fa-solid fa-motorcycle"></i>
                                        <h1>{h.id}</h1>
                                    </div>
                                    </a>
                                )
                                :
                                <h1>Cargando datos....</h1>
                            }
                        </div>
                    </div>
                </div>
                :
                <F_entrada/>
            }
    </div>
    )
}
export default Vehiculos;