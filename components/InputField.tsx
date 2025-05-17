import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, Image } from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string; // Label for the input field
  placeholder: string; // Placeholder text for the input field
  errorMessage?: string; // Optional error message
  helperText?: string; // Optional helper text for guidance
  isSecure?: boolean; // Optional flag for password input (e.g., to toggle visibility)
  eyeIcon?: any; // Custom eye icon
  eyeSlashIcon?: any; // Custom eye-slash icon
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  errorMessage,
  helperText,
  isSecure = false,
  eyeIcon,
  eyeSlashIcon,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isSecure);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="px-6">
      {/* Label */}
      <Text className="text-lg font-roboto text-typography-800 m-2">{label}</Text>

      {/* Input Field */}
      <View className="relative">
        <TextInput
          className="p-3 border border-gray-100 rounded-3xl min-h-14 w-full text-typography-800"
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible} // Use state to control visibility
          {...rest} // Spread any other props like value, onChange, etc.
        />
        
        {/* Custom Eye Icon for password visibility toggle */}
        {isSecure && (
          <TouchableOpacity
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onPress={togglePasswordVisibility}
          >
            <Image
              source={isPasswordVisible ? eyeSlashIcon : eyeIcon}
              style={{ width: 20, height: 20 }} // Adjust size as necessary
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Helper Text */}
      {helperText && (
        <Text className="text-xs font-normal text-typography-600 mt-1">{helperText}</Text>
      )}

      {/* Error Message */}
      {errorMessage && (
        <Text className="text-xs font-normal text-red-500 mt-1">{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputField;