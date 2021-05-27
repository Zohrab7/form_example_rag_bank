import * as React from "react";
import {Button, Form} from "semantic-ui-react";

import {DynamicField} from "./DynamicField";

interface IProps {
    fields: any[],
    editable: any,
    handleViewingMode: any
}

export const DynamicForm: React.FC<IProps> = ({
                                           fields,
                                           editable,
                                           handleViewingMode
                                       }) => {
    return (
        <Form>
            {Boolean(fields.length) && <Form.Group>
                <Button size="mini" color="green" disabled={editable}
                        onClick={handleViewingMode}>Редактировать</Button>
                <Button size="mini" color="facebook" disabled={!editable}
                        onClick={handleViewingMode}>Сохранить</Button>
            </Form.Group>}
            <div className={`rga__content-fields-${!editable}`}>
                {
                    fields.map(({key, field}) => {
                        return (
                            <DynamicField
                                id={key}
                                field={field}
                                readOnly={!editable}/>
                        )

                    })
                }
            </div>
        </Form>)
};
