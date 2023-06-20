interface MenuItemProps {
  label: string;
  children: React.ReactNode;
}

export const MenuItem = ({ label, children }: MenuItemProps) => {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100"
    >
      {children}
      {label}
    </a>
  );
};
