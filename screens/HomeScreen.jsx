import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";

import { Ionicons, AntDesign } from "@expo/vector-icons";

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
import erkin from "../media/photos/erkin.png";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
// import {React} from "../media/icons/Tinder_(app)-Flame-Logo.wine.svg";

const DATA = [
  {
    id: 1,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
  },
  {
    id: 2,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
  },
  {
    id: 3,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
  },
  {
    id: 4,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logOut, user } = useAuth();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  return (
    <SafeAreaView style={tw("flex-1")}>
      <View style={tw(" flex-row items-center justify-between px-5 ")}>
        <TouchableOpacity>
          <Image
            style={tw("h-10 w-10 rounded-full ")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={tw("h-14 w-14")}
            source={require("../media/icons/tinder-icon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color={"#FF5864"} />
        </TouchableOpacity>
      </View>

      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DATA}
          animateCardOpacity
          // verticalSwipe={false}
          renderCard={(card) => (
            <View key={card.id} style={tw("bg-red-500 h-3/4 rounded-xl")}>
              <Image
                style={tw("absolute top-0 h-full w-full rounded-xl")}
                source={card.photoURL}
              />
              <View style={tw("bg-transparent w-full h-20  absolute bottom-0")}>
                <View style={tw("p-10")}>
                  <Text>{card.firstName}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
