import IconButton from "../Buttons/IconButton/IconButton";

const MonthSelector: React.FC = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <div className="grid col">
            <div className="grid row space-between">
                <span className="text-bold text-blue">May 2018</span>
                <div className="grid row">
                    <IconButton icon={'<'}/>
                    <IconButton icon={'>'}/>
                </div>
            </div>
            <div className="grid col">
                <div className="display-grid">
                    {
                        days.map((item, key) => {
                            return (<span>{item}</span>);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MonthSelector;