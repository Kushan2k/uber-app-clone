import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../Slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { API_KEY } from "@env";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const map = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    setTimeout(() => {
      map.current.fitToSuppliedMarkers(["Origin", "Destination"], {
        edgePadding: {
          top: 30,
          right: 30,
          bottom: 30,
          left: 30,
        },
      });
    }, 500);
  }, [origin, destination]);

  return (
    <MapView
      ref={map}
      style={tw`flex-1`}
      mapType={"mutedStandard"}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          apikey={API_KEY}
          origin={origin.description}
          destination={destination.description}
          strokeWidth={3}
          strokeColor={"black"}
        />
      )}
      {origin?.location && (
        <Marker
          title="Origin"
          description={origin.description}
          identifier={"origin"}
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )}
    </MapView>
  );
}
