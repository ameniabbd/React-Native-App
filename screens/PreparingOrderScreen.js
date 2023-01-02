import { View, Text, Image,ActivityIndicator } from "react-native";
import React,{useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";



const PreparingOrderScreen = () => {
  const navigation=useNavigation()
  useEffect(() => {
  
      setTimeout(() => {
        navigation.navigate("Delivery")
        
      }, 4000);
    
  }, []);
  return (
    <SafeAreaView style={tw`bg-[#00CCBB] flex-1 justify-center items-center `}>
      <Image source={require("../assets/logo.gif")} style={tw`h-70 w-70`} />
      <Text style={tw`text-md my-10  font-bold texte-center text-white`}>
      Waiting for Restaurant to accept your order !
      </Text>
    
      <ActivityIndicator size={60} color="white" />
    </SafeAreaView>


  );
};

export default PreparingOrderScreen;
