import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import tw from "twrnc";
import { urlFor } from "../sanity/sanity";
import { useNavigation } from "@react-navigation/native";

const ResturentsCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      style={tw` bg-white mr-3 shadow-sm`}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={tw` h-36 w-64 rounded-sm`}
      />
      <View style={tw` px-3 pb-4`}>
  
        <Text style={tw` font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw` flex-row items-center space-x-2`}>
          <AntDesign name="star" size={20} color="#FFBF66" opacity={0.5} />
          <Text style={tw`text-xs text-gray-500`}>
            {rating} {genre}
          </Text>
        </View>
        <View style={tw` flex-row items-center space-x-2`}>
          <Entypo name="location-pin" size={20} color="#00353F" opacity={0.4} />
          <Text style={tw`text-xs text-gray-500`}> Adresse: {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturentsCard;
