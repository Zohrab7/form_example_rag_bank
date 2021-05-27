import * as React from "react";
import DatePicker, {ReactDatePickerProps, registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import {Form, SemanticWIDTHS} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.min.css";

import "./date-picker.scss";

registerLocale('ru', ru);

type IDatePickerTypes = 'Date/Time' | 'Day' | 'Time';

interface IProps extends ReactDatePickerProps {
    startDate?: Date | null;
    endDate?: Date | null;
    label?: React.ReactElement<any> | string,
    width?: SemanticWIDTHS | undefined,
    data?: boolean,
    type: IDatePickerTypes
}

const DataPickerPropsByType = (type: IDatePickerTypes) => ({
    'Date/Time': {
        dateFormat: "yyyy-MM-dd hh:mm a",
        placeholderText:"yyyy-MM-dd hh:mm a"
    },
    'Day': {
        dateFormat: "dd",
        placeholderText:"dd"
    },
    'Time': {
        showTimeSelect:true,
        showTimeSelectOnly:true,
        dateFormat:"h:mm aa",
        timeFormat: "HH:mm",
        timeInputLabel: "Часы:",
        timeCaption: "Часы",
        timeIntervals:15,
        placeholderText:"h:mm aa"
    }
}[type]);

export const DataPicker: React.FC<IProps> = ({
                                                 label,
                                                 readOnly,
                                                 onChange,
                                                 width,
                                                 data,
                                                 type
                                             }) => {
    const [startDate, setStartDate] = React.useState();

    return <Form.Field width={width && width}>
        {label && <label>{label}</label>}
        <DatePicker
            readOnly={readOnly}
            locale="ru"
            selected={startDate}
            selectsStart
            startDate={startDate}
            onChange={(date:any) => setStartDate(date)}
            {
                ...DataPickerPropsByType(type)
            }
        />
    </Form.Field>
};
