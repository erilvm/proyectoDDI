import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, ActivityIndicator, MD2Colors, Card } from 'react-native-paper'

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
       <Avatar.Image style={{top: -50}} size={140} source={require('../assets/person1.jpeg')} />
       
      </View>
      
      <View style={styles.footer}>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    padding: 10,
  },
 
})