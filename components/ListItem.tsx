import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

interface ListItemProps {
  title: string;  
  iconSource: any; 
  onPress: () => void;  
}

const ListItem: React.FC<ListItemProps> = ({ title, iconSource, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row justify-between p-4 border-b border-gray-100 rounded-3xl"
    >
      {/* Icon on the left */}
      <Text className="text-lg font-bold flex-1 text-center">{title}</Text>
      <Image source={iconSource} className="w-6 h-6 mr-3" />

      {/* Title in the center */}
      
    </TouchableOpacity>
  );
};

export default ListItem;
