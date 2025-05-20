import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import MessageField from "@/components/MessageField";
import Icons from "@/constants/icons";
import TypewriterText from "@/components/TypewriterText";
import Message from "@/components/Message";
import Header from "@/components/Header";
import { Camera } from "lucide-react-native";
import CustomDrawer from "@/components/CustomDrawer";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { id: string; text: string; sender: string }[]
  >([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = {
        id: Date.now().toString() + "-bot",
        text: "Thanks for your message! Let's go deeper into that topic.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  const renderMessage = ({
    item,
  }: {
    item: { id: string; text: string; sender: string };
  }) => {
    if (item.sender === "bot") {
      return (
        <View className="mb-2 self-start max-w-[80%]">
          <TypewriterText text={item.text} />
        </View>
      );
    }

    return (
      <View className="mb-4 self-end bg-gray-100 rounded-2xl px-3 py-2 max-w-[80%]">
        <Message
          message={item.text}
          onEdit={(newText) => {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === item.id ? { ...msg, text: newText } : msg
              )
            );
          }}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="flex-1 pt-12 px-2">
        <Header
          id="AI Bot"
          title="AI Assistant"
          onMenuPress={() => setDrawerOpen(true)}
          onNewChatPress={() => {
            setMessages([]);
            setInput("");
          }}
        />
        {drawerOpen && (
          <TouchableOpacity
            onPress={() => setDrawerOpen(false)}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 50,
            }}
          />
        )}
        <CustomDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={
            messages.length === 0 ? { flex: 1 } : { padding: 20 }
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-xl font-light text-center px-4">
                Start a conversation...
              </Text>
            </View>
          }
        />
        <View className="flex-row items-center px-4 pb-4 space-x-2">
          <TouchableOpacity
            onPress={() => console.log("fileinput")}
            className="p-2 rounded-full"
          >
            <Camera />
          </TouchableOpacity>

          <View className="flex-1">
            <MessageField
              placeholder="Ask me anything..."
              value={input}
              onChangeText={setInput}
              righticon={Icons.edit}
              onPress={sendMessage}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
