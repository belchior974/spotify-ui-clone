import { Maximize2, Minus, X } from "lucide-react";

interface ColoredButtonProps {
  color: string;
}

export const ColoredButton = ({ color }: ColoredButtonProps) => {
  const renderTheCorrectIcon = () => {
    switch (color) {
      case "red":
        return <X className="text-black invisible group-hover:visible w-3 h-3" />;
        break;

      case "yellow":
        return <Minus className="text-black invisible group-hover:visible w-3 h-3" />;
        break;

      case "green":
        return <Maximize2 className="text-black invisible group-hover:visible w-3 h-3" />;
        break;
      default:
    }
  };

  return (
    <div className={`w-3 h-3 bg-${color}-500 rounded-full group`}>
      {renderTheCorrectIcon()}
    </div>
  );
};
