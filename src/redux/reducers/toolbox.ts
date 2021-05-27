import {createReducer} from "redux-act";

export type IToolBoxActionTypes =
    'Email'|
    'Url'|
    'Phone Number'|
    'Tags'|
    'Address'|
    'Date/Time'|
    'Day'|
    'Time'|
    'Currency'|
    'Survey'|
    'Signature';


export enum fieldBarTypes {
    basic = "BASIC",
    advanced = "ADVANCED",
    layout = "LAYOUT",
    data = "DATA",
    premium = "PREMIUM"
}

export type IToolBoxBase = {
    [key in fieldBarTypes]: IToolBoxActionTypes[]
}


export interface IToolBoxState {
    fieldBar: IToolBoxBase
}

export const initialState: IToolBoxState = {
        fieldBar:
            {
                [fieldBarTypes.basic]: [
                    'Email','Phone Number',
                ],
                [fieldBarTypes.advanced]: [
                    'Email','Url','Phone Number',
                    'Tags','Address','Date/Time',
                    'Day','Time','Currency','Survey',
                    'Signature'
                ],
                [fieldBarTypes.layout]: [],
                [fieldBarTypes.data]: [],
                [fieldBarTypes.premium]: [],
            }
    }
;

const toolBoxReducer = createReducer<IToolBoxState>({}, initialState)


export default toolBoxReducer;



