import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

import { urlFor } from "../sanity/sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState();
  const items=useSelector((state)=>selectBasketItemsWithId(state,id));
  const dispatch=useDispatch();

  const addItemToBasket=()=>{
dispatch(addToBasket({id,name,description,price,image}))

  };

  const removeItemFromBasket=()=>{
    if(!items.length>0)return;
    dispatch(removeFromBasket({id}))
    
      };

     
 
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
            <TouchableOpacity onPress={removeItemFromBasket}
            disabled={!items.length} >
              <AntDesign name="minuscircle" size={24} 
              color={items.length>0 ? "#FFBF66":"gray"}
      
               />
            </TouchableOpacity>
            <Text> {items.length} </Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" size={24} color="#FFBF66" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
