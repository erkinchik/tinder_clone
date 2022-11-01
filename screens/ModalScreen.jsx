import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !!job || !age;

  return (
    <View style={tw("flex-1 items-center pt-1")}>
      <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={require("../media/icons/tinderLogoText.png")}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Step 1: The profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder={"Enter The Profile Pic"}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Step 2: a Job
      </Text>
      <TextInput
        value={job}
        onChageText={(text) => setJob(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder={"Enter our occupation"}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder={"Enter your age"}
      />
      <TouchableOpacity
        disabled={incompleteForm}
        style={[
          tw("w-64 p-3 rounded-xl absolute bottom-10"),
          incompleteForm ? tw("bg-red-100") : tw("bg-red-400"),
        ]}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
