import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Users = () => {
  return (
    <View>
      <Text style={[styles.label]}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/multiple_v1.png")}
          />
          12
        </Text>
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
    label:{
        color:'#666666',
        fontSize:14,
        padding:5
    }
})