import {
  View,
  Text,
  TextInput,
  TextInputProps,
  Image,
  ImageProps,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Send } from "lucide-react-native";

interface MessageFieldProps extends TextInputProps {
  label?: string;
  placeholder: string;
  righticon?: ImageProps;
  onPress?: () => void;
}

const MessageField: React.FC<MessageFieldProps> = ({
  label,
  placeholder,
  righticon,
  onPress,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      className="w-full items-center"
    >
      {label && (
        <Text className="text-sm text-typography-800 mb-2">{label}</Text>
      )}
      <View className="flex-row items-center border border-gray-100 rounded-full p-3 min-h-20">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-start text-typography-800 pr-3"
          multiline
          numberOfLines={4}
          {...rest}
        />
        {righticon && onPress && (
          <TouchableOpacity onPress={onPress}>
            <Send />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageField;
