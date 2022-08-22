import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>home</Text>
      <Button onPress={() => navigation.navigate("Chat")} title="go to chat" />
    </View>
  );
};

export default HomeScreen;
