import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const ButtonWin = () => {
  return (
    <View style={styles.btn1}>
      <Pressable style={styles.button} >
        <Text style={styles.text}><Image
            style={styles.tinyLogo}
            source={require("../assets/leaderboard.png")}
          />Win 1Cr</Text>
      </Pressable>
    </View>
  );
};

export default ButtonWin;

const styles = StyleSheet.create({
    btn1:{
        paddingHorizontal:15,
        justifyContent:'flex-end'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'f;ex-end',
        paddingVertical: 5,
        paddingHorizontal: 17,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        elevation: 3,
        backgroundColor: '#8F67AD',
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
      },
});
