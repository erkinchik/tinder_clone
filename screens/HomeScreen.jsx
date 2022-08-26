import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";

import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import erkin from "../media/photos/erkin.png";
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
    location: "3 км от вас",
  },
  {
    id: 2,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
    location: "3 км от вас",
  },
  {
    id: 3,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
    location: "3 км от вас",
  },
  {
    id: 4,
    firstName: "Erkin",
    lastName: "Bedibaev",
    occupation: "dev",
    photoURL: erkin,
    age: 18,
    location: "3 км от вас",
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
          stackSize={3}
          cardIndex={0}
          // onSwipedTop={}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  color: "#FF5864",
                  textAlign: "center",
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  color: "#4ded30",
                  textAlign: "center",
                  alignItems: "flex-end",
                },
              },
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  color: "#1DB5CE",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  textAlign: "center",
                },
              },
            },
          }}
          // verticalSwipe={false}
          renderCard={(card) => (
            <View key={card.id} style={tw("bg-red-500 h-3/4 rounded-xl")}>
              <Image
                style={tw("absolute top-0 h-full w-full rounded-xl")}
                source={card.photoURL}
              />
              <View
                style={[
                  styles.cardShadow,
                  tw(
                    "absolute bottom-0 w-full flex-col justify-between h-20 px-6 py-2 rounded-b-xl bg-transparent"
                  ),
                ]}
              >
                <View style={tw("flex flex-row items-center ")}>
                  <Text style={tw("text-white font-bold text-xl")}>
                    {card.firstName}
                  </Text>
                  <Text style={tw("text-white text-lg ml-1")}>{card.age}</Text>
                  <MaterialIcons
                    style={tw("ml-2")}
                    name="info"
                    size={14}
                    color="white"
                  />
                </View>
                <View style={tw("flex flex-row items-center")}>
                  <Feather name="map-pin" size={14} color="white" />
                  <Text style={tw("text-white text-base ml-1")}>
                    {card.location}
                  </Text>
                </View>
                <View style={tw("flex flex-row items-center")}>
                  <View>
                    <Entypo name="cross" size={24} color="#FF5864" />
                  </View>
                  <View>
                    <FontAwesome name="star" size={24} color="#4ded30" />
                  </View>
                  <View>
                    <FontAwesome name="heart" size={24} color="green" />
                  </View>
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

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
