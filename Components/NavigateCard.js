import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../Slices/navSlice";
import { useNavigation } from "@react-navigation/native";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-2 text-xl`}>Good Morgin,Kushan</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={styles}
            placeholder="where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            minLength={2}
            fetchDetails={true}
            query={{
              key: API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 28,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 19,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
