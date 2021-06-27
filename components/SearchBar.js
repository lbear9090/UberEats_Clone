import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete placeholder="Search" />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        
    }
})
export default SearchBar;
