import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Edit, Menu } from "lucide-react-native";

interface HeaderProps {
  id: number | string;
  title?: string;
  onMenuPress?: () => void;
  onNewChatPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  id,
  title,
  onMenuPress,
  onNewChatPress,
}) => {
  return (
    <View className="flex flex-row items-center justify-between px-4 pt-6 pb-2 bg-white">
      <TouchableOpacity onPress={onMenuPress}>
        <Menu size={24} color="black" />
      </TouchableOpacity>

      <Text className="text-2xl font-semibold text-center flex-1 mx-4">
        {title ?? `Chat with ${id}`}
      </Text>

      <TouchableOpacity onPress={onNewChatPress}>
        <Edit size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;