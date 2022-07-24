interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`
                bg-[#9CFA84] hover:bg-[#a1fd77]
                w-60 py-5 rounded-md
                text-neutral-800 uppercase tracking-widest
            `}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
};
