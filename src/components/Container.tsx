import * as React from "react";
import {Segment} from "semantic-ui-react";

import "./container.scss";


interface IProps {

}

export const Container: React.FC<IProps> = ({children}) => {
    return (
        <Segment className="rga__content">
            {children}
        </Segment>
    );
};
