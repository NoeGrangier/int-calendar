import './TimePicker.css';
import Input from "../Input/Input";

const TimePicker: React.FC = () => {
    /*
    <div className="datepicker-container">
        <Input/>
        <TimeSelector/>
    </div>
     */

    return (
        <div className="padding-12">
            <Input text={'Time'} placeholder={'12:00 AM'}/>
            <div>Time selector</div>
        </div>
    )
};

export default TimePicker;