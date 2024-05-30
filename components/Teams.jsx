import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Teams = () => {
  return (
    <View>
      <Text style={[styles.label]}>1123/4000 teams</Text>
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  label: {
    color: "#333333",
    fontSize: 15,
    padding:5
  },
});
