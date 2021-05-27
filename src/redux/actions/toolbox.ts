import {createAction} from "redux-act";
import {TOOLBOX_ACTION_NAMESPACE} from "../../const";

export const getToolBoxField = createAction<any>(
    `${TOOLBOX_ACTION_NAMESPACE}`,
    content => content
);
