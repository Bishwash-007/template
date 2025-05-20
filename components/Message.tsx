import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Pencil } from "lucide-react-native"; // or use Image if you have a custom icon

interface MessageProps {
  message: string;
  onEdit?: (updatedMessage: string) => void;
}

const Message: React.FC<MessageProps> = ({ message, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [editedText, setEditedText] = useState(message);

  const handleLongPress = (e: GestureResponderEvent) => {
    setShowIcon(true);
  };

  const handleEditConfirm = () => {
    setIsEditing(false);
    setShowIcon(false);
    if (onEdit) onEdit(editedText);
  };

  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      activeOpacity={0.9}
      className="max-w-[80%] self-end my-1"
    >
      <View className="rounded-2xl px-4 py-2 relative">
        {isEditing ? (
          <TextInput
            value={editedText}
            onChangeText={setEditedText}
            onBlur={handleEditConfirm}
            autoFocus
            className="text-base text-typography-800"
          />
        ) : (
          <Text className="text-base text-typography-800">{editedText}</Text>
        )}

        {showIcon && !isEditing && (
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            className="absolute top-1 right-1 p-1"
          >
            <Pencil size={16} color="#4B5563" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Message;