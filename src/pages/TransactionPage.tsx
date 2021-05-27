import * as React from "react";
import {useSelector} from "react-redux";

import {StoreState} from "../types";
import {useAppDispatch} from "../redux/store";
import {handleTransactionEditabilty} from "../redux/actions";
import {DynamicForm} from "../components";

interface IProps {

}

const TransactionPage: React.FC<IProps> = () => {

    const {fields,editable} = useSelector(({dashboard}: StoreState) => dashboard.transaction);
    const dispatch = useAppDispatch();

    const handleViewingMode = () => {
        dispatch(handleTransactionEditabilty())
    };

    return (<DynamicForm {...{fields,editable,handleViewingMode}}/>)
};

export default TransactionPage;
