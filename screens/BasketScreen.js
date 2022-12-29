import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { AntDesign } from "@expo/vector-icons";
import { urlFor } from "../sanity/sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupeItemsInBasket, setGroupeItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupeItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      <View style={tw`flex-1 bg-gray-100 `}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xs `}>
          <View>
            <Text style={tw`text-lg font-bold text-center  `}>Basket</Text>
            <Text style={tw` text-center text-gray-400`}>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw` rouded-full bg-gray-100 absolute top-3 right-5`}
          >
            <AntDesign
              name="closecircle"
              size={24}
              color="#4AA3A2"
              style={tw` rouded-full bg-gray-100 absolute top-6 right-5`}
            />
          </TouchableOpacity>
        </View>

        <View
          style={tw`flex-row items-center space-x-4 px-4 py-3 bg-white my-5`}
        >
          <Image
            style={tw` h-7 w-7 bg-red-500  p-4 rounded-full`}
            source={{
              uri: "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2015/10/16133208/delivery_WEB-824x549.jpg",
            }}
          />

          <Text style={tw` flex-1 p-2-4`}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw` flex-1 flex-1 p-2-4 text-[#00CCBB]`}>change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={tw`divide-y divide-gray-200`}>
          {Object.entries(groupeItemsInBasket).map(([key, item]) => (
            <View
              key={key}
              style={tw` flex-row items-center space-x-3 py-2 px-4 bg-white `}
            >
              <Text style={tw`text-[#00CCBB] text-md`}>{item.length} x</Text>
              <Image
                source={{ uri: urlFor(item[0]?.image).url() }}
                style={tw` h-10 w-10 rounded-full mx-2 `}
              />
              <Text style={tw` flex-1 `}>{item[0]?.name}</Text>
              <Text style={tw`text-gray-400 mx-2`}>
                <Currency quantity={item[0]?.price} currency="GBP" />
              </Text>

              <TouchableOpacity>
                <Text
                  style={tw` text-[#00CCBB] text-md `}
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 space-y-4 `}>

          <View style={tw`flex-row justify-between space-y-2`}>
            <Text style={tw`text-gray-400 `}>Subtotal</Text>
            <Text style={tw`text-gray-400 `}>
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400 `}>Delivery Fee</Text>
            <Text style={tw`text-gray-400 `}>
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text>Order Toatal</Text>
            <Text style={tw`font-extrabold`}>
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity style={tw`rounded-xs bg-[#00CCBB] p-2`}>
            <Text style={tw`text-white text-center text-lg font-bold`}>
              Place Order{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
