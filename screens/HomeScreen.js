import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chevron from "react-chevron";
// Import vector icons
import { Entypo } from '@expo/vector-icons';
import tw from 'twrnc';
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
    <SafeAreaView>
      <Text className="container h-12 justify-center bg-slate-300 items-center">
        <View className="flex pb-3 items-center mx-4 space-x-2">
          <Image
         style={tw`p-4 h-7 w-7 bg-red-300 rounded-full`}
            source={{
              uri: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
            }}
          />
          <View>
            <Text className=" font-bold  text-gray-400 text-xs">
              Deliver Now
            </Text>
            <Text className=" font-bold  text-xl">Current Location</Text>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
