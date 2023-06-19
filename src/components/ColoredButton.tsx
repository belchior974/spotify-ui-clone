
interface ColoredButtonProps {
    color: string;
}

export const ColoredButton = ({color}: ColoredButtonProps) => {
    
    return (
        <div className={`w-3 h-3 bg-${color}-500 rounded-full`}></div>
    )


}