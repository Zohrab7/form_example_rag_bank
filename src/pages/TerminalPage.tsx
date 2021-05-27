import * as React from "react";
import {useSelector} from "react-redux";

import {StoreState} from "../types";
import {useAppDispatch} from "../redux/store";
import {handleTerminalEditabilty} from "../redux/actions";
import {DynamicForm} from "../components";

interface IProps {

}

const TerminalPage: React.FC<IProps> = () => {

    const {fields,editable} = useSelector(({dashboard}: StoreState) => dashboard.terminal);
    const dispatch = useAppDispatch();

    const handleViewingMode = () => {
        dispatch(handleTerminalEditabilty())
    };


    return (<DynamicForm {...{fields,editable,handleViewingMode}}/>)
};

export default TerminalPage;
