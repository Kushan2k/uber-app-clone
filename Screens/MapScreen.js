import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../Components/Map";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "../Components/RideOptionsCard";

export default function MapScreen() {
  const Stack = createStackNavigator();
  return (
    <View>
      <StatusBar backgroundColor="transparent" />
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
