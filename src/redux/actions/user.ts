import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const addUserField = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} ADD_USER_FIELD`,
    content => content
);

export const handleUserEditabilty = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} HANDLE_USER_EDITABILITY`
);

