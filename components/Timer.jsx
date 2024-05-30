import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = () => {
  return (
    <View style={styles.disc_con}>
      <Text style={styles.disc}>Discount ends in 10:05:45</Text>
      <Text style={styles.price}>₹60</Text>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
    disc_con:{
        padding:10,
        display:'flex',
        flexDirection:'row'
    },
    disc:{
        color:'#024680',
        fontSize:15,
        fontWeight:'300',
    },
    price:{
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize:16,
        marginLeft:5
    }
})