import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View>
      <Image source={icon} />
      <Text>{name}</Text>
    </View>
  );
};

const AuthLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default AuthLayout;
