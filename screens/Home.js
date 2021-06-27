import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  headerTabs: {
    backgroundColor: "white",
    padding: 15,
  },
});

export default Home;
