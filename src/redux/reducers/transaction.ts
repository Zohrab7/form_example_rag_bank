import {createReducer} from "redux-act";
import {addTransactionField, handleTransactionEditabilty} from "../actions";

export interface ITransactionState {
    fields: any[],
    editable: boolean
}

export const initialState: ITransactionState = {
    fields: [],
    editable: true
};

const transactionReducer = createReducer<ITransactionState>({}, initialState)
    .on(addTransactionField, (state, payload) => ({
        ...state,
        fields: [...state.fields, payload]
    }))
    .on(handleTransactionEditabilty, (state) => ({
        ...state,
        editable: !state.editable
    }))

export default transactionReducer;



