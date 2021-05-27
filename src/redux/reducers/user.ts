import {createReducer} from "redux-act";
import {addUserField, handleUserEditabilty} from "../actions";

export interface IUserState {
    fields: any[],
    editable: boolean
}

export const initialState: IUserState = {
    fields: [],
    editable: true
};

const userReducer = createReducer<IUserState>({}, initialState)
    .on(addUserField, (state, payload) => ({
        ...state,
        fields: [...state.fields, payload]
    }))
    .on(handleUserEditabilty, (state) => ({
        ...state,
        editable: !state.editable
    }))

export default userReducer;



