import './Calendar.css';
import DatePicker from "../DatePicker/DatePicker";
import TimePicker from "../TimePicker/TimePicker";

const Calendar: React.FC = () => {
    return (
        <div className="grid col calendar-container">
            <header className="text-bold">Schedule response</header>
            <div className="grid row space-between">
                <div className="flex-8">
                    <DatePicker/>
                </div>
                <div className="flex-4">
                    <TimePicker/>
                </div>
            </div>
        </div>
    )
}

export default Calendar;