import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Collapsible from '../../components/Collapsible'
import { Colors } from "../../constants/Colors"

const home = () => {
  return (
    <View style={{backgroundColor: Colors.white,
      height:"100%"}}>
     {/*Collapsible */}
     <Collapsible />
     {/*Collapsible */}
     {/*Collapsible */}
    </View>
  )
}

export default home

const styles = StyleSheet.create({})