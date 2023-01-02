import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../Slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavFavourites = () => {
  const dispacth = useDispatch();
  const navigation = useNavigation();

  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "201/10 Colombo Road Kurunegala",
      loc: {
        lat: 7.480052386154154,
        lng: 80.36010040964022,
      },
    },
    {
      id: "456",
      icon: "bookmark",
      location: "Campus",
      destination: "Ingiriya Road, Padukka",
      loc: {
        lat: 6.854825259958822,
        lng: 80.09265004011907,
      },
    },
  ];
  return (
    <FlatList
      data={data}
      style={tw`pt-3`}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-300`, { height: 1 }]}></View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            dispacth(
              setOrigin({
                location: item.loc,
                descitpion: item.destination,
              })
            );
            dispacth(setDestination(null));
            navigation.navigate("MapScreen");
          }}
          style={tw`flex-row items-center p-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-500 p-3`}
            name={item.icon}
            type="ionicon"
            color={"white"}
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
