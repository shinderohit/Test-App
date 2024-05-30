import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TotalPrice from './TotalPrice'
import Winner from './Winner'
import ButtonWin from './ButtonWin'

const AllWinners = () => {
  return (
    <View style={styles.flex}>
      <TotalPrice/>
      <Winner/>
      <ButtonWin/>
    </View>
  )
}

export default AllWinners

const styles = StyleSheet.create({
    flex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:350

    }
})