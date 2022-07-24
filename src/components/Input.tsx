interface InputProps {
    type: 'text' | 'password';
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <div className={`
            flex flex-col justify-start w-full
            text-white
        `}>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                placeholder={props.placeholder ?? props.label}
                onChange={(e) => props.onChange(e.target.value)}
                className={`
                    text-neutral-800 px-2 py-4 bg-blue-50 rounded
                    focus:outline-none focus:bg-blue-100
                    ${props.className}
                `}
            />
        </div>
    )
};
