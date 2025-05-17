import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchText: string) => void;
  searchIcon: any;
  clearIcon: any;
  voiceIcon: any; // Voice icon
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  searchIcon,
  clearIcon,
  voiceIcon,
}) => {
  const [searchText, setSearchText] = useState<string>("");

  // Handle change in the search text
  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text); // Call the onSearch prop function whenever search text changes
  };

  // Clear the search text
  const clearSearch = () => {
    setSearchText("");
    onSearch(""); // Trigger the onSearch function with an empty string when cleared
  };

  return (
    <View className="flex flex-row items-center p-4 rounded-lg shadow-lg">
      {/* Search Icon */}
      <TouchableOpacity className="mr-2 absolute right-14">
        <Image
          source={searchIcon}
          style={{ width: 20, height: 20 }} // Adjust icon size as needed
        />
      </TouchableOpacity>

      {/* Search Input */}
      <TextInput
        className="flex-1 p-3 border border-gray-200 rounded-full text-typography-800 min-h-14"
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleSearchTextChange}
      />

      {/* Clear Icon */}
      {searchText.length > 0 && (
        <TouchableOpacity className="ml-2" onPress={clearSearch}>
          <Image
            source={clearIcon}
            style={{ width: 20, height: 20 }} // Adjust icon size as needed
          />
        </TouchableOpacity>
      )}

      {/* Voice Icon */}
      <TouchableOpacity
        className="ml-2 absolute right-8"
        onPress={() => console.log("pressed")}
      >
        <Image
          source={voiceIcon}
          style={{ width: 20, height: 20 }} // Adjust icon size as needed
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
