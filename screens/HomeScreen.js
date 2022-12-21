import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chevron from "react-chevron";
// Import vector icons
import { FontAwesomeIcon } from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    return (
      () => {
        navigation.setOptions({
          headerShown: false,
        });
      },
      []
    );
  });

  return (
    <View>
      <Text className="text-red-500"></Text>
      <Image
        source={{
          uri: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
        }}
        style={"h-7 w-7 bg-gray-300 p-4 rounded-full"}
      />
      {/*     <View className="flex pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className=" font-bold  text-gray-400 text-xs">
              Deliver Now
            </Text>
            <Text className=" font-bold  text-xl">
              Current Location
              <FontAwesomeIcon icon="fa-thin fa-chevron-down" />
            </Text>
          </View>
          <FontAwesomeIcon icon="fa-thin fa-chevron-down" />
        </View>
      </Text> */}
    </View>
  );
};

export default HomeScreen;
