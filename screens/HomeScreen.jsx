import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";

import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
// import {React} from "../media/icons/Tinder_(app)-Flame-Logo.wine.svg";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logOut, user } = useAuth();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity style={tw("absolute left-5 top-3 ")}>
          <Image
            style={tw("h-10 w-10 rounded-full ")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={tw("absolute left-5 top-3 ")}>
        {/*<Logo width={120} height={40} />*/}
        <Button
          onPress={logOut}
          title=" logout"
          style={tw("absolute left-5 top-10 ")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
