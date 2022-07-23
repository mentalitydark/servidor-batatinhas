interface LayoutProps {
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className={`
                flex flex-col justify-center items-center
                h-1/2 w-1/2 bg-neutral-800/75 rounded-lg
                border border-white border-solid
            `}>
                {props.children}
            </div>
        </main>
    )
};
