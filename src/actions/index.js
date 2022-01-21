import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const NEW_ERROR = 'NEW_ERROR';

export const fetchSmurfs = () => (dispatch) => {
    console.log('inside of fetchsmurfs');
    dispatch(loading());
    axios.get('http://localhost:3333/smurfs')
    .then(resp => {
        dispatch(success(resp.data));
    })
    .catch(error => {
        console.error(error);
    })
}

export const addSmurf = (smurf) => (dispatch) => {
    console.log('inside of addSmuft in the actions.js file');
    dispatch(adding(smurf));
}

export const setError = (errorMessage) => (dispatch) => {
    dispatch(handleError(errorMessage));
}

const handleError = (newError) => {
    return {type: NEW_ERROR, payload: newError};
}

const adding = (newSmurf) => {
    return {type: ADD_SMURF, payload: newSmurf};
}

const loading = () => {
    return { type: LOADING};
}

const success = (data) => {
    return { type: SUCCESS, payload: data}
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.