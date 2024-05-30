import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mega = (props) => {
  return (
    <View style={styles.bgtext}>
      <Text style={styles.megatext}>Mega Contest</Text>
    </View>
  )
}

export default Mega

const styles = StyleSheet.create({
    bgtext:{
        backgroundColor:'#e8f6fb',
        padding:5, 
        marginRight:5,
        borderColor:'#d6edf5',
        borderWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        height:30
    },
    megatext:{
        fontSize:14,
        fontWeight:'500',
        color:'#306999'
    }
})