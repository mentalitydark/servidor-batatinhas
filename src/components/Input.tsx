interface InputProps {
    type: 'text' | 'password';
    label: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export default function Input(props: InputProps) {
    return (
        <div className={`
            flex flex-col justify-start
        `}>
            <label htmlFor="">{props.label}</label>
            <input
                type={props.type}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    )
};
