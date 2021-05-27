import * as React from "react";
import {useSelector} from "react-redux";

import {StoreState} from "../types";
import {useAppDispatch} from "../redux/store";
import {handleUserEditabilty} from "../redux/actions";
import {DynamicForm} from "../components";

interface IProps {

}

const UserPage: React.FC<IProps> = () => {

    const {fields, editable} = useSelector(({dashboard}: StoreState) => dashboard.user);
    const dispatch = useAppDispatch();

    const handleViewingMode = () => {
        dispatch(handleUserEditabilty())
    };

    return (<DynamicForm {...{fields,editable,handleViewingMode}}/>)
};

export default UserPage;
