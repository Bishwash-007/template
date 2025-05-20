import { X } from "lucide-react-native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ListItem from "./ListItem";
import { router } from "expo-router";
import Avatar from "./Avatar";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Example drawer items
const drawerItems = [
  { id: "1", title: "Chat 1" },
  { id: "2", title: "Chat 2" },
  { id: "3", title: "New Chat" },
];
const username = "bishwash";

const CustomDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const translateX = useSharedValue(-300);

  useEffect(() => {
    translateX.value = withTiming(isOpen ? 0 : -300, { duration: 300 });
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleItemPress = (id: string) => {
    router.push(`/chat/${id}`);
    onClose(); // Close drawer after navigation
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<(typeof drawerItems)[0]>) => (
    <ListItem title={item.title} onPress={() => handleItemPress(item.id)} />
  );

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 300,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 2, height: 0 },
          zIndex: 100,
        },
        animatedStyle,
      ]}
    >
      <View className="flex flex-row pt-16 px-6 justify-between items-center">
        <Avatar
          imageuri={require("@/assets/images/check.png")}
          title={username}
        />
        <TouchableOpacity onPress={onClose}>
          <X size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={drawerItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={

              <Text className="text-xl font-normal text-gray-800">
                Chat History
              </Text>
        }
      />
    </Animated.View>
  );
};

export default CustomDrawer;
