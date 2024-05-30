import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Legend = () => {
  return (
    <View>
      <Text style={[styles.label]}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/guaranteed1_v2.png")}
          />
          100%
        </Text>
    </View>
  )
}

export default Legend

const styles = StyleSheet.create({
    label:{
        color:'#024680',
        fontSize:14,
    padding:5
    }
})