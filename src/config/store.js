import { createStore } from "redux"

const initialState={
    redux : true,
    c_vehiculo : {},
    vista: true,
}

const reducer = (state = initialState , action) => {
    const {type, c_vehiculo, vista} = action

    if(type === "@c_vehiculo"){
        return {
            ...state,
            c_vehiculo
        }
    }
    
    if(type === "@c_vista"){
        return {
            ...state,
            vista
        }
    }
    return state
}


export default 
createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)