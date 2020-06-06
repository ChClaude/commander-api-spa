import React, {useReducer} from "react";
import {CommanderContext} from './commanderContext';
import commandReducer from "./commandReducer";
import {
    GET_COMMANDS,
    GET_COMMAND,
    CREATE_COMMAND,
    UPDATE_COMMAND,
    PATCH_COMMAND,
    DELETE_COMMAND,
    CLEAR_UI
} from '../types';
import axios from "axios";

const CommanderProvider = props => {

    const initialSate = {
        commands: null,
        command: null
    };

    const [state, dispatch] = useReducer(commandReducer, initialSate);

    // Create command
    const createCommand = async command => {
        const res = await axios.post('https://localhost:5001/api/Commands', command);

        console.log('create command');
        console.log(res.data);

        dispatch({
            type: CREATE_COMMAND,
            payload: res.data
        });
    };

    // Get Commands
    const getCommands = async () => {
        const res = await axios.get('https://localhost:5001/api/Commands');

        console.log('get commands');
        console.log(res);

        dispatch({
            type: GET_COMMANDS,
            payload: res.data
        });
    };

    // Get a single Command
    const getCommand = async id => {
        const res = await axios.get(`https://localhost:5001/api/Commands/${id}`);

        console.log('get a single command');
        console.log(res.data);

        dispatch({
            type: GET_COMMAND,
            payload: res.data
        });
    };

    // Delete a command
    const deleteCommand = async id => {

    };

    // Update a command
    const updateCommand = async (id, command) => {

    };

    // Clear UI
    const clearUI = () => {
        dispatch({
            type: CLEAR_UI
        });
    };


    return (
        <CommanderContext.Provider value={{
            commands: state.commands,
            command: state.command,
            getCommands,
            getCommand,
            deleteCommand,
            updateCommand,
            createCommand,
            clearUI
        }}>
            {props.children}
        </CommanderContext.Provider>
    );
};

export default CommanderProvider;