import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuthButton from "@/components/OAuth";
import { router } from "expo-router";

const SignIn = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSignIn = () => {
    console.log("signed in");
    router.push(`/chat/${1}`);
    // TODO: Add your sign-in logic here
  };

  const handleGoogleLogin = () => {
    console.log("signed in with Google");
    // TODO: Add your Google sign-in logic here
  };

  return (
    <View className="flex-1 flex-col bg-white pt-20">
      <View className="relative mb-8 ml-8 justify-start items-start flex-col py-8">
        <Image
          source={require("@/assets/images/illustration.png")}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <Text className="absolute z-10 bottom-0 left-0 text-black text-3xl font-semibold font-roboto text-start">
          Log In
        </Text>
      </View>

      <View className="w-full space-y-8 mb-12">
        <InputField
          label="Email"
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

      <View className="items-center">
        <CustomButton
          title="Log In"
          onPress={handleSignIn}
          fullWidth={false}
          variant="dark"
          width={360}
        />
        <View className="flex-row items-center my-3 mx-4">
          <View className="flex-auto h-[1px] bg-gray-300" />
          <Text className="text-gray-500">Or</Text>
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

      <View className="flex-row justify-center items-center mt-4">
        <Text className="text-base text-gray-600">
          Don&apos;t have an account?
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="text-base text-primary-100 ml-2 font-semibold"
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
