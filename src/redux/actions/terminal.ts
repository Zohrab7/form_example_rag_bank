import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const addTerminalField = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} ADD_TERMINAL_FIELD`,
    content => content
);

export const handleTerminalEditabilty = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} HANDLE_USER_EDITABILITY`
);
