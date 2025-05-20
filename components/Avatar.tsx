import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface AvatarProps {
  title: string;
  imageuri: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ title, imageuri }) => {
  return (
    <View className="flex-row items-center space-x-3 px-4">
      <Image
        source={imageuri}
        className="w-8 h-8 rounded-full"
        resizeMode="cover"
      />
      <Text className="text-base font-medium text-black">{title}</Text>
    </View>
  );
};

export default Avatar;