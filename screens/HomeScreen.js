import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import client from "../sanity/sanity";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity/sanity.js";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
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
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
          ...,
          restaurantes[]->{
            ...,
            dishes[]->
          }
         }`
      )
      .then((data) => setFeaturedCategories(data))
      .catch(console.error);
  }, [0]);
  console.log(featuredCategories);
  return (
    <SafeAreaView style={tw`bg-white pt-6`}>
      {/** header */}

      <View style={tw`flex-row pb-3 items-center mx-4 px-2 space-x-2 `}>
        <Image
          style={tw` h-10 w-10 bg-red-500  p-4 rounded-full`}
          source={{
            uri: "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2015/10/16133208/delivery_WEB-824x549.jpg",
          }}
        />
        <View style={tw`flex-1 p-2`}>
          <Text style={tw`font-bold  text-gray-400 text-xs `}>Deliver Now</Text>
          <Text style={tw`font-bold  text-xl `}>
            Current Location
            <Entypo
              name="chevron-down"
              size={20}
              color="black"
              style={tw`mr-4`}
            />
          </Text>
        </View>
        <FontAwesome5 name="user-alt" size={20} color="gray" />
      </View>

      {/** Search */}
      <View style={tw`flex-row pb-3 items-center mx-4 px-2 space-x-2 `}>
        <View style={tw`flex-row space-x-2 flex-1  bg-gray-100 p-3 `}>
          <Octicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Restaurnt et cuisine"
            keyboardType="default"
            style={tw`flex-1  `}
          ></TextInput>
        </View>
        <Entypo name="sound-mix" size={20} color="gray" />
      </View>

      {/** BODY */}

      <ScrollView
        style={tw` bg-gray-100  `}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/** Categories */}
        <Categories />

        {/** Featured Rows */}
        {featuredCategories.map((category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
     )   ))}

      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
