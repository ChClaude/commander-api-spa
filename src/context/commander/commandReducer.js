import {
    GET_COMMANDS,
    GET_COMMAND,
    CREATE_COMMAND,
    UPDATE_COMMAND,
    PATCH_COMMAND,
    DELETE_COMMAND,
    CLEAR_UI
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_COMMANDS:
            return {
                ...state,
                commands: action.payload
            };
        case GET_COMMAND:
            return {
                ...state,
                command: action.payload
            };
        case CREATE_COMMAND:
            return {
                ...state,
                commands: [...state.commands, action.payload]
            };
        case UPDATE_COMMAND:
            return {};
        case PATCH_COMMAND:
            return {};
        case DELETE_COMMAND:
            return {};
        case CLEAR_UI:
            return {
                ...state,
                commands: null,
                command: null
            };
        default:
            return state;
    }
};
