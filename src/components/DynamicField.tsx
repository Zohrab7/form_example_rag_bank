import * as React from "react";
import {Form} from "semantic-ui-react";

import {DataPicker} from "./DataPicker";

interface IDynamicField {
    id: any;
    field: any;
    readOnly: boolean;
}

export const DynamicField: React.FC<IDynamicField> = React.memo(({id, field, readOnly}) => {

    const fieldData = [
        {
            type: 'field',
            fds: ['Email', 'Url', 'Phone Number', 'Currency', 'Address'],
            component: <Form.Input
                key={id}
                readOnly={readOnly}
                label='Text Field'/>
        },
        {
            type: 'textArea',
            fds: ['Survey', 'Signature'],
            component: <Form.Field
                key={id}
                readOnly={readOnly}
                label='Text Area'
                control='textarea' rows='3'/>
        },
        {
            type: 'date',
            fds: ['Date/Time', 'Day', 'Time'],
            component: <DataPicker
                readOnly={readOnly}
                label={field}
                key={id}
                type={field}
                onChange={e => e}/>
        },
    ].find(({fds}) => fds.includes(field)) || null;

    return fieldData && fieldData.component
});
