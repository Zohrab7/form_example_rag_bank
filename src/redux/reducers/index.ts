import {combineReducers} from "redux";

import {StoreState} from "../../types";
import toolBoxReducer from "./toolbox";
import userReducer from "./user";
import terminalReducer from "./terminal";
import transactionReducer from "./transaction";

const rootReducer = combineReducers<StoreState>({
    toolbox:toolBoxReducer,
    dashboard: combineReducers({
        user:userReducer,
        terminal:terminalReducer,
        transaction:transactionReducer
    })
});

export default rootReducer;
