import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Winner = () => {
  return (
    <View>
      <Text style={[styles.label]}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/Frame 62.png")}
          />
          40% Winners
        </Text>
    </View>
  )
}

export default Winner

const styles = StyleSheet.create({
    label:{
        color:'#666666',
        fontSize:14
    }
})