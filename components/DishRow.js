import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

import { urlFor } from "../sanity/sanity";
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState();
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        style={tw`bg-white border p-4 border-gray-100 ${
          isPressed && "border-b-0"
        }`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-500 mt-2 text-md`}>
              <Currency quantity={price} />
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={tw`h-20 w-20 bg-gray-300 p-4`}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center space-x-2 pb-3`}>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={30} color="#D6955B" />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={30} color="#D6955B" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
