import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';

 const SmurfList = (props)=> {
    // const isLoading = loading;

    const { loading, smurfs } = props;

    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
    
    if (loading) {
        return <h1>Loading...</h1>;
    }

    
    if(Array.isArray(props.smurfs[0])){
        return (
            <div>
                {smurfs[0].map(item => (
                    <Smurf smurf={item} />
        ))}
            </div>
        ) 
    }

    if(Array.isArray(smurfs)){
        return (
            <div>
                {/* {props.smurfs.map(item => (
                    <Smurf smurf={item} />
                ))} */}

                {smurfs.map(item => (
                    <Smurf smurf={item} />
                ))}
            </div>
        )
    }
    
    return(
        <div>
            SmurfList.js
        </div>
    )
}

const mapStateToProps = (state) => {
    // return state;
    return {
        smurfs: state.smurfs,
        loading: state.loading
    }
}
export default connect(mapStateToProps, {})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.