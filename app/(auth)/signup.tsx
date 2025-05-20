import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuthButton from "@/components/OAuth";
import { router } from "expo-router";

const SignUp = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSignUp = () => {
    console.log("signed up");
    router.push(`/chat/${1}`);
    // TODO: handle actual sign-up logic
  };

  const handleGoogleLogin = () => {
    console.log("signed in with Google");
    // TODO: handle Google sign-in logic
  };

  return (
    <View className="flex-1 bg-white justify-start px-4 pt-16">
      {/* Heading */}
      <View className="relative mb-8 ml-8 justify-start items-start flex-col py-8">
        <Image
          source={require("@/assets/images/illustration.png")}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <Text className="absolute z-10 bottom-0 left-0 text-black text-3xl font-semibold font-roboto text-start">
          Create an Account
        </Text>
      </View>

      {/* Input Fields */}
      <View className="w-full space-y-6 mb-10">
        <InputField
          label="Username"
          placeholder="john_doe"
          value={username}
          onChangeText={setUsername}
        />
        <InputField
          label="E-mail"
          placeholder="johndoe@example.com"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          isSecure
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Buttons */}
      <View className="items-center space-y-4 w-full">
        <CustomButton
          title="Sign Up"
          onPress={handleSignUp}
          width={360}
          variant="dark"
        />

        <View className="flex-row items-center my-3 mx-4">
          <View className="flex-auto h-[1px] bg-gray-300" />
          <Text className="text-gray-500 px-4">Or</Text>
          <View className="flex-auto h-[1px] bg-gray-300" />
        </View>

        <OAuthButton
          title="Continue with Google"
          provider="google"
          icon={require("@/assets/images/google.png")}
          onPress={handleGoogleLogin}
          width={360}
        />
      </View>

      {/* Footer */}
      <View className="flex-row justify-center items-center mt-6">
        <Text className="text-base text-gray-600">
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/signin")}
          className="text-base text-primary-100 ml-2 font-semibold"
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
