interface LayoutProps {
    children: any;
    className?: string;
}

export default function Layout(props: LayoutProps) {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className={`
                flex flex-col justify-center items-center
                h-min w-1/2 bg-neutral-800/75 rounded-lg
                ${props.className}
            `}>
                {props.children}
            </div>
        </main>
    )
};
