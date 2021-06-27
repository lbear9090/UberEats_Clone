import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const HeaderButton = ({
  text,
  activeTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={[
      styles.headerButtonContainer,
      { backgroundColor: activeTab === text ? "black" : "white" },
    ]}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={[
        styles.btnText,
        { color: activeTab === text ? "white" : "black" },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerButtonContainer: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
});

export default HeaderTabs;
