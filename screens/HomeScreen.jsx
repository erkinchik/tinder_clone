import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logOut } = useAuth();
  return (
    <View>
      <Text>home</Text>
      <Button onPress={() => navigation.navigate("Chat")} title="go to chat" />
      <Button onPress={logOut} title="logout" />
    </View>
  );
};

export default HomeScreen;
