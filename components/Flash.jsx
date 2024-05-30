import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Flash = () => {
  return (
    <View>
      <Text style={[styles.label]}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/booster_v1.png")}
          />
          3
        </Text>
    </View>
  )
}

export default Flash

const styles = StyleSheet.create({
    label:{
        color:'#666666',
        fontSize:14,
        
    padding:5
    }
})