import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Mega from "./Mega";
import Timer from "./Timer";
import PrimaryButton from "./PrimaryButton";
import InputText from "./InputText";
import AllWinners from "./AllWinners";
import AllInput from "./AllInput";
import AllLegend from "./AllLegend";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contest}>
          <Mega />
          <Timer />
        </View>
        <View style={styles.contest}>
          <AllInput />
        </View>
        <View style={styles.contest}>
          <AllWinners />
        </View>
        <View style={styles.contest}>
          <AllLegend />
        </View>
        <View style={styles.content}></View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.btmtext}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/up_opt44.png")}
          />
          Biggest prizes guaranteed / IPL tagline
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 220,
    flexDirection: "column",
  },
  contest: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contest1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //   contest2: {
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "space-around",
  //   },
  content: {
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: "#444444",
    textAlign: "center",
  },
  bottom:{
    backgroundColor:'#D9F1FE',
    padding:10,
    width:350,
    borderRadius:5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  btmtext:{
    fontSize:15,
    color:'black',
    fontWeight:'bold'
  },
  tinyLogo:{
    margin:5
  }
});

export default Card;
