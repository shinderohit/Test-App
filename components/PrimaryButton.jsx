import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = () => {
  return (
    <View style={styles.btn1}>
      <Pressable style={styles.button} >
        <Text style={styles.text}>₹55</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    btn1:{
        paddingHorizontal:15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 25,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#00BF36',
        marginBottom:10
      },
      text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '500',
        letterSpacing: 0.25,
        color: 'white',
      },
});
