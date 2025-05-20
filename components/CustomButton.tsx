import { TouchableOpacity, Text, Dimensions, ViewStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost" | "dark";
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  halfwidth?: boolean;
  width?: number; // Optional: allow custom width
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  className = "",
  textClassName = "",
  icon,
  fullWidth = false,
  halfwidth = false,
  width,
}) => {
  const screenWidth = Dimensions.get("window").width;

  // Compute style-based width
  let buttonStyle: ViewStyle = {};
  if (fullWidth) {
    buttonStyle.width = screenWidth - 60;
  } else if (halfwidth) {
    buttonStyle.width = (screenWidth - 60) / 2;
  } else if (width !== undefined) {
    buttonStyle.width = width;
  }

  const buttonClassName = `
    flex-row items-center justify-center rounded-xl min-h-12 px-4 py-4
    ${variant === "primary" ? "bg-red-400" : ""}
    ${variant === "secondary" ? "bg-gray-500" : ""}
    ${variant === "danger" ? "bg-red-500" : ""}
    ${variant === "outline" ? "border-2 border-red-400 bg-transparent" : ""}
    ${variant === "ghost" ? "bg-transparent" : ""}
    ${variant === "dark" ? "bg-gray-700" : ""}
    ${disabled ? "opacity-50" : ""}
    ${className}
  `;

  const textStyles = `
    text-center font-bold text-white
    ${disabled ? "text-opacity-50" : ""}
    ${variant === "outline" || variant === "ghost" ? "text-red-400" : ""}
    ${textClassName}
  `;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={buttonClassName}
      style={buttonStyle}
    >
      {icon && icon}
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;