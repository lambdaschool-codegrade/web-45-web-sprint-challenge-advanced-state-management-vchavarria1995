import axios from "axios";
export const START_SMURF_FETCH = "START_SMURF_FETCH"
export const SUCCESSFUL_SMURF_FETCH = "SUCCESSFUL_SMURF_FETCH"
export const FAILED_SMURF_FETCH = "FAILED_SMURF_FETCH"
export const ADD_SMURF = "ADD_SMURF"
export const ERROR_MESSAGE = "ERROR_MESSAGE"

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: START_SMURF_FETCH})
        axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({type: SUCCESSFUL_SMURF_FETCH, payload: response.data.data})
            dispatch({type: ADD_SMURF, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FAILED_SMURF_FETCH, payload: error.error})
        })
    }
}
export const errorMessage = error => {
    return {
        type: ERROR_MESSAGE,
        payload: error
    }
}
export const addSmurf = ({ name, nickname, position, summary }) => {
    return{
        type: ADD_SMURF,
        payload: { name, nickname, position, summary }
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.