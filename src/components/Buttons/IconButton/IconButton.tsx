import './IconButton.css'
import '../Button/Button.css';

interface IconButtonProps {
    icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({icon}) => {
    return (
        <>
            <button className="button icon-button">
                {icon}
            </button>
        </>
    )
}

export default IconButton;