interface IconBoxSidebarProps {
    children: React.ReactNode;
}


export const IconBoxSidebar = ({ children }: IconBoxSidebarProps) => {

    return (
        <nav className="space-y-5 mt-10">
            {children}
        </nav>
    )

}