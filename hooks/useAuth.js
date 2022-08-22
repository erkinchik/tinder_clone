import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "73611802577-apk30042p1e5jcmqjegggogvcac5dg79.apps.googleusercontent.com",
  iosClientId:
    "73611802577-ui4pgq3494jdgjglq5v96thsri0rh7jb.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
      }
    });
  };
  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
