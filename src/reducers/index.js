import { LOADING, ERROR, SUCCESS, ADD_SMURF, NEW_ERROR } from "../actions";

export const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                error: "You have caused a error, tisk tisk.",
                loading: false
            }
        case SUCCESS:
            console.log('action.payload: ', state.smurfs)
            return {
                ...state,
                // smurfs: 
                smurfs: [...state.smurfs, action.payload],
                loading: false
            }
        case ADD_SMURF:
            // console.log('inside of ADD_SMURF in the index.js')
            // // // console.log('state', state);
            // // console.log(state.smurfs[0]);
            // // console.log('----------------');
            // // //This still needs to be finished, just a placeholder atm

            // // //I think this will throw a bug because of how the arrays are nested

            if(Array.isArray(state.smurfs[0])){
                return {
                    ...state,
                    smurfs: [...state.smurfs[0], action.payload]
                }
            }else{
                return {
                    ...state,
                    smurfs: [...state.smurfs, action.payload]
                }
            }
        case NEW_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            console.log('inside of default on index.js reducer file')
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.