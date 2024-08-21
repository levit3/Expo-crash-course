import { Image, StyleSheet, Platform, View } from "react-native";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <View className=" flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">Aora!</Text>
        <StatusBar style="auto" />
        <Link href="/bookmark">Explore More</Link>
      </View>
    </>
  );
}
