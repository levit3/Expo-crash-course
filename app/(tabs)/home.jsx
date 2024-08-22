import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text>Home</Text>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
