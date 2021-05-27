import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const addTransactionField = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} ADD_TRANSACTION_FIELD`,
    content => content
);

export const handleTransactionEditabilty = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} HANDLE_TRANSACTION_EDITABILITY`
);
