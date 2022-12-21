import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chevron from "react-chevron";
// Import vector icons
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
const HomeScreen = () => {
  const navigation = useNavigation();
 /*  useLayoutEffect(() => {
    return (
      () => {
        navigation.setOptions({
          headerShouwn: false,
        });
      },
      []
    );
  }); */

  return (
    <SafeAreaView tyle={tw`bg-white pt-5`}>
      <Text className=" bg-red-500 ">
        <View style={tw`flex-row pb-3 items-center mx-4 space-x-2`}>
          <Image
            style={tw` h-7 w-7 bg-red-300  p-4 rounded-full`}
            source={{
              uri: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
            }}
          />
          <View style={tw`flex-1 p-2`}>
            <Text style={tw`font-bold  text-gray-400 text-xs `}>
              Deliver Now
            </Text>
            <Text style={tw`font-bold  text-xl `}>
              Current Location
              <Entypo name="chevron-down" size={20} color="black" />
            </Text>
          </View>
          <FontAwesome5
            name="user-alt"
            size={20}
            color="black"
       
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
