import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStatus from "../statusBarSet";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStatus.droidSafeArea} className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-700 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* Search box */}
      <View className="flex-row items-center mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 rounded-md  items-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants, Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={30} color="#00ccbb" />
      </View>
      {/* Body */}

      <ScrollView>
        {/* Categories */}

        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
