import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RideOptionsCard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-grow bg-white`}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
          style={tw`absolute z-40  top-3 left-5 p-3 rounded-full bg-gray-100`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-5 `}>Select a Ride.</Text>
      </View>
    </SafeAreaView>
  );
}
