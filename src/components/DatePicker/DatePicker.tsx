import './DatePicker.css';
import Input from "../Input/Input";
import MonthSelector from "../MonthSelector/MonthSelector";

const DatePicker: React.FC = () => {
    /*
        <div>
            <Input/>
            <MonthSelector/>
        </div>
    */

    return (
        <div className="padding-12">
            <Input text={'Date'} placeholder={'01/01/2022'}/>
            <MonthSelector/>
        </div>
    )
};

export default DatePicker;