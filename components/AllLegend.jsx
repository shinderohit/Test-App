import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Legend from './Legend'
import Flash from './Flash'
import Teams from './Teams'
import Users from './Users'

const AllLegend = () => {
  return (
    <View style={styles.flex}>
      <Teams/>
      <Legend/>
      <Flash/>
      <Users/>
    </View>
  )
}

export default AllLegend

const styles = StyleSheet.create({
    flex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#FAFAFA',
        width:350,
        marginTop:5

    }
})