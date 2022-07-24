interface HintProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

export default function Hint(props: HintProps) {
    return (
        <span
            onClick={props.onClick}
            className={`
                text-xs
                ${props.className}
            `}
        >
            {props.text}
        </span>
    )
};
