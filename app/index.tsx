import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import React, { useState } from "react";
import Card from "@/components/Card";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Icons from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import ListItem from "@/components/ListItem";

const Index = () => {
  const [name, setName] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [password, setPasswordState] = useState<string>("");

  function setPassword(text: string): void {
    if (text.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
    setPasswordState(text);
    // setPasswordState(text);
  }

  function handleSearch(searchText: string): void {
    console.log("Search Text:", searchText);
    // Handle search query here (e.g., filter data, make an API call)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-center font-semibold text-2xl text-red-600">
            Welcome to the Index Page
          </Text>
          <SearchBar
            placeholder="Search books, authors, etc."
            searchIcon={Icons.searchNormal}
            clearIcon={Icons.cross}
            voiceIcon={Icons.Mic}
            onSearch={handleSearch}
          />
        </View>
        {/* Other components */}
        <View className="flex flex-row">
          <Card
            title="Metamorphosis"
            subtitle="Frantz Kafka"
            imageSource={{
              uri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699178982i/157112404.jpg",
            }}
            targetRoute="/book/details"
            paramKey="bookId"
            paramValue={123}
            rating={4.8}
          />
          {/* Repeat for more cards */}
          <Card
            title="Wireless Headphones"
            subtitle="Noise Cancelling"
            imageSource={{
              uri: "https://m.media-amazon.com/images/I/712wyKsNmML.jpg",
            }}
            targetRoute="/product/details"
            paramKey="productId"
            paramValue={567}
            footerText="$199.99"
          />
        </View>
        <View className="flex flex-row gap-2 justify-start m-2">
          <CustomButton
            title="View All Products"
            onPress={() => {
              // Navigate to the product list page
            }}
          />
          <CustomButton
            title="View All Products"
            onPress={() => {
              // Navigate to the product list page
            }}
          />
        </View>
        <View>
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            isSecure={true}
            eyeIcon={Icons.eye}
            eyeSlashIcon={Icons.eyeSlash}
            errorMessage={passwordError}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <ListItem
          title="Account Settings"
          iconSource={require("../assets/icons/setting-3.png")} // Example icon source
          onPress={() => {
            console.log("Account settings clicked!");
          }}
        />

        <ListItem
          title="Notifications"
          iconSource={require("../assets/icons/notification-bing.png")} // Example icon source
          onPress={() => {
            console.log("Notifications clicked!");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
