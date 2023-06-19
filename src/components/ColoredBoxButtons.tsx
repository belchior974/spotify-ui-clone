interface BoxColoredButtonsProps {
    children: React.ReactNode;
  }
  

export const ColoredBoxButtons = ({ children }: BoxColoredButtonsProps) => {

    return (
        <div className="flex items-center gap-2">
            {children}    
        </div>
    )
}