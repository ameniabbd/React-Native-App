import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency  from "react-currency-formatter";
import tw from "twrnc";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if(items.length===0)return null;

  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
      <TouchableOpacity   onPress={()=>navigation.navigate('Basket')}  style={tw`bg-[#4AA3A2] mx-5 p-4 rounded-lg flex-row items-center space-x-2`}>
        <Text style={tw`text-lg text-white font-extrabold py-1 px-2 bg-[#FFBF66] `}>{items.length}</Text>
        <Text style={tw`text-lg text-white font-extrabold text-center py-1 px-2 bg`}>View Basket</Text>
        <Text style={tw`text-lg text-white font-extrabold py-1 px-2 bg`} >
            <Currency  quantity={basketTotal} currency="GBP"/>
        </Text>

      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
