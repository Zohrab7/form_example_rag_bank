import {IToolBoxState} from "../redux/reducers/toolbox";
import {IUserState} from "../redux/reducers/user";
import {ITerminalState} from "../redux/reducers/terminal";
import {ITransactionState} from "../redux/reducers/transaction";

export interface StoreState {
    toolbox: IToolBoxState,
    dashboard: {
        user: IUserState,
        terminal: ITerminalState,
        transaction: ITransactionState
    }
}
