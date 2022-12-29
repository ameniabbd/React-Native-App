import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity/sanity";
import { AntDesign, Entypo } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {setRestaurant} from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
  dispatch(setRestaurant(
    
    {
      
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
      
    }
  ))
  }, [dispatch]);
 
  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View style={tw`relative`}>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          style={tw`w-full h-56 bg-gray-300 p-4 `}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`absolute top-8 left-5 p-2`}
        >
          <AntDesign name="leftcircleo" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={tw`bg-white`}>
        <View style={tw` px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title}</Text>
          <View style={tw`flex-row space-x-2 my-1`}>
            <View style={tw`flex-row items-center space-x-2 `}>
              <AntDesign name="star" size={22} color="#FFBF66" opacity={0.5} />
              <Text style={tw`text-xs font-bold text-gray-500`}>
                <Text> {rating}</Text> {genre}
              </Text>
            </View>

            <View style={tw`flex-row items-center space-x-2 `}>
              <Entypo
                name="location-pin"
                size={22}
                color="#00353F"
                opacity={0.4}
              />
              <Text style={tw`text-xs text-gray-500`}> Adresse: {address}</Text>
            </View>
          </View>
          <Text style={tw`text-xs text-gray-500 pb-4 mt-2`}>
            {short_description}
          </Text>
        </View>
        <TouchableOpacity
          style={tw`flex-row items-center space-x-2 p-4 border-y border-gray-300`}
        >
          <AntDesign
            name="questioncircleo"
            size={20}
            color="gray"
            opacity={0.6}
          />
          <Text style={tw`pl-2 flex-1 text-md font-bold`}>
            Souffrez-vous d'allergies alimentaires?
          </Text>
          <AntDesign name="right" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={tw`pb-36`}>
        <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>

        {/** dishes rows */}
       
         {dishes?.map((dish) => (
          <DishRow
          key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish.short_description}
          price={dish.price}
          image={dish.image}
        />
        ))}
      </View>
    </ScrollView>
    </>
  );
};

export default RestaurantScreen;
