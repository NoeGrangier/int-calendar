import './Input.css'

interface InputProps {
    text: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({text, placeholder}) => {
    return (
        <div className="grid row align-items-center">
            <span className="margin-right-12">
                {text}
            </span>
            <input className="input" placeholder={placeholder}/>
        </div>
    )
};

export default Input;