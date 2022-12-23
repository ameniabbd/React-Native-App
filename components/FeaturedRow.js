import { View, Text, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import sanityClient from "../sanity/sanity.js";
import tw from "twrnc";
import ResturentsCard from "./ResturentsCard";
const FeaturedRow = ({ id, title, description }) => {
  const [restaurantes, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="featured" && _id == $id]{
          ...,
          restaurantes[]->{
            ...,
            dishes[]->,
            type->{name
            }
          },

         }
         [0]
         
         `,
        { id }
      )
      .then((data) => setRestaurant(data?.restaurantes))
      .catch(console.error);
  }, []);
  console.log("hi", restaurantes);

  return (
    <View>
      <View style={tw` mt-4 flex-row items-center justify-between px-4 `}>
        <Text style={tw` text-bold text-lg  `}>{title}</Text>

        <AntDesign name="caretright" size={15} color="gray" />
      </View>
      <Text style={tw` text-xs text-gray-500 px-4 `}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={tw` pt-4 `}
      >
        {/** Rexturents Card */}

        {restaurantes?.map((restaurant) => (
          <ResturentsCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
