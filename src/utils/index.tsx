import * as React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {Button} from "semantic-ui-react";

import {dashboardNav, IconNames} from "../const";
import {addTerminalField, addTransactionField, addUserField} from "../redux/actions";
import {IToolBoxActionTypes} from "../redux/reducers/toolbox";
import {useAppDispatch} from "../redux/store";
import {StoreState} from "../types";


export const key_id = () => Math.random().toString(36).substr(2, 9);

export const ActionListByType = ({action}: any) => {

    const {user,transaction,terminal} = useSelector(({dashboard}: StoreState) => dashboard);
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();

    const handleClick = ((data: string) => {
        switch (pathname){
            case dashboardNav.user[0]||dashboardNav.user[1]:
                user.editable&&dispatch(addUserField({key:key_id(),field:data}))
                break;
            case dashboardNav.transaction:
                transaction.editable&&dispatch(addTransactionField({key:key_id(),field:data}))
                break;
            case dashboardNav.terminal:
                terminal.editable&&dispatch(addTerminalField({key:key_id(),field:data}))
                break;
        }
    });

    return (
        <React.Fragment>
            {action.map((data:IToolBoxActionTypes) =>
               (<Button
                    onClick={()=>handleClick(data)}
                    color='red'
                    key={data}
                    icon={IconNames[data]}
                    content={data}
                />)
            )}
        </React.Fragment>)
};
