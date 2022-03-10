import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'


const Vehiculos = () => {
    const data = useSelector(state => state.c_vehiculo)
    const dispatch = useDispatch()
    const regresar = () => {
        dispatch({
            type: "@c_vista",
            vista: true
        })
    }
    const G_datos = async (e) => {
        const Nombres = document.getElementById("Nombres").value
        const cc = document.getElementById("cc").value
        const numcc = document.getElementById("numcc").value
        const apellidos = document.getElementById("apellidos").value
        const placa = document.getElementById("placa").value
        console.log(cc)
        if (Nombres === "") {
            Swal.fire({
                title: 'Error!',
                text: 'El campo Nombres esta vacio',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        } else if (cc === "Tipo") {
            Swal.fire({
                title: 'Error!',
                text: 'Selecione el tipo de documento',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        } else if (numcc === "") {
            Swal.fire({
                title: 'Error!',
                text: 'Escriba el numero de su documento',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        } else if (apellidos === "") {
            Swal.fire({
                title: 'Error!',
                text: 'El campo Apellidos esta vacio',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        } else if (placa === "") {
            Swal.fire({
                title: 'Error!',
                text: 'El campo placa esta vacio',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        }
    }
    console.log(data)
    return (
        <div className="box container-lg">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="text-center">
                            <h4>ingreso de vehiculo</h4>
                            <h4>{data.tipo === 1 ? "Vehiculo/carro" : null}
                                {data.tipo === 2 ? "bicicleta" : null}
                                {data.tipo === 3 ? "moto" : null}
                            </h4>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" id="Nombres" placeholder="Nombres" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Documento</label>
                                    <select class="form-select" id="cc">
                                        <option selected>Tipo</option>
                                        <option value="1">C.C</option>
                                        <option value="2">C.Extranjera</option>
                                        <option value="3">NIT</option>
                                    </select>
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" id="numcc" placeholder="N° identificación" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                            </div>
                            <div className="col">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" id="apellidos" placeholder="Apellidos" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" id="placa" placeholder="Placa" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                            </div>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-success" onClick={() => G_datos()} type="button">Enviar</button>
                            <button type="button" class="btn btn-outline-secondary" onClick={() => regresar()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                </svg>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}
export default Vehiculos;