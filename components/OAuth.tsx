import React from "react";
import {
  TouchableOpacity,
  Text,
  Dimensions,
  ViewStyle,
  Image,
  ImageProps,
} from "react-native";

interface OAuthButtonProps {
  title: string;
  onPress: () => void;
  icon: ImageProps;
  provider?: "google" | "github" | "facebook" | "twitter" | "custom";
  disabled?: boolean;
  fullWidth?: boolean;
  halfWidth?: boolean;
  width?: number;
  className?: string;
  textClassName?: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({
  title,
  onPress,
  icon,
  provider = "custom",
  disabled = false,
  fullWidth = false,
  halfWidth = false,
  width,
  className = "",
  textClassName = "",
}) => {
  const screenWidth = Dimensions.get("window").width;

  const providerStyles: Record<string, string> = {
    google: "bg-white border border-gray-300",
    github: "bg-black",
    facebook: "bg-blue-600",
    twitter: "bg-sky-500",
    custom: "bg-gray-700",
  };

  const textColors: Record<string, string> = {
    google: "text-black",
    github: "text-white",
    facebook: "text-white",
    twitter: "text-white",
    custom: "text-white",
  };

  // Determine dynamic width
  const buttonStyle: ViewStyle = {};
  if (width !== undefined) {
    buttonStyle.width = width;
  } else if (fullWidth) {
    buttonStyle.width = screenWidth - 60;
  } else if (halfWidth) {
    buttonStyle.width = (screenWidth - 60) / 2;
  }

  const buttonClassName = `
    flex-row items-center justify-center rounded-xl min-h-12 px-4 py-2
    ${providerStyles[provider]}
    ${disabled ? "opacity-50" : ""}
    ${className}
  `;

  const textStyles = `
    text-base font-semibold
    ${textColors[provider]}
    ${textClassName}
  `;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={buttonClassName}
      style={buttonStyle}
    >
      <Image source={icon} resizeMode="contain" className="size-6 mx-3" />
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OAuthButton;
