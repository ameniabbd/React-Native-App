import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    var region = {
        latitude: 37.48,
        longitude: -122.16,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    };
    return (
        <View style={tw`bg-[#00CCBB] flex-1  `}>
            <SafeAreaView style={tw`z-50  `}>
                <View style={tw`flex-row  justify-between intems-center p-5`}>
                    <TouchableOpacity  onPress={navigation.goBack}>
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={tw`font-light text-white text-lg `}>Order Help</Text>
                </View>

                <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text style={tw`font-light text-gray-400 text-lg `}>
                                Estimated Arrival
                            </Text>
                            <Text style={tw`font-bold text-3xl `}>45-55 min </Text>
                        </View>
                        <Image
                            style={tw` h-20 w-20 bg-red-500  p-4 rounded-full`}
                            source={{
                                uri: "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2015/10/16133208/delivery_WEB-824x549.jpg",
                            }}
                        />
                    </View>
                    <Text>Your order at {restaurant.title} is being prepared</Text>
                </View>
            </SafeAreaView>

            <Image
                style={tw` flex-1  z-0 -mt-12`}
                source={{
                    uri: "https://www.google.com/maps/d/thumbnail?mid=15buFTEmEatxbHNt0w-r5uxd36zc&hl=fr",
                }}
            />


            <SafeAreaView    style={tw` bg-white flex-row items-canter space-x-2 h-28`}>
                <Image
                    style={tw` h-12 w-12 bg-red-500  p-2 ml-4  rounded-full`}
                    source={{
                        uri: "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2015/10/16133208/delivery_WEB-824x549.jpg",
                    }}
                />
                <View style={tw` flex-1`}>
                    <Text style={tw` text-lg mx-4`}>
                        Ameni Abdelghani
                    </Text>
                    <Text style={tw` text-gray-400 mx-4`}>
                        Your Rider 
                    </Text>

                </View>
                <Text style={tw` text-[#00CCBB] text-xl mr-5 font-bold`}>
                 Call
                    </Text>

            </SafeAreaView>








        </View>
    );
};

export default DeliveryScreen;
