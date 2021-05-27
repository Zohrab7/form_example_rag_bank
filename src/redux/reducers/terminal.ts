import {createReducer} from "redux-act";
import {addTerminalField, handleTerminalEditabilty} from "../actions";

export interface ITerminalState {
    fields: any[],
    editable: boolean
}

export const initialState: ITerminalState = {
    fields: [],
    editable: true
};

const terminalReducer = createReducer<ITerminalState>({}, initialState)
    .on(addTerminalField, (state, payload) => ({
        ...state,
        fields: [...state.fields, payload]
    }))
    .on(handleTerminalEditabilty, (state) => ({
        ...state,
        editable: !state.editable
    }))

export  default terminalReducer;

