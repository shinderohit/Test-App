import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputText from './InputText'
import PrimaryButton from './PrimaryButton'

const AllInput = () => {
  return (
    <View style={styles.flex}>
      <InputText/>
      <PrimaryButton/>
    </View>
  )
}

export default AllInput

const styles = StyleSheet.create({
    flex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    }
})