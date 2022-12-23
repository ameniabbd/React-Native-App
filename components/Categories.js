import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity/sanity.js";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `   *[_type == "category"  ] `
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
        {categories?.map((categorie) => (
            <CategoryCard
            key={categorie._id}
            imgUrl={urlFor(categorie.image).url()}
            title={categorie.name}
          />
        ))}
    
     
    </ScrollView>
  );
};

export default Categories;
