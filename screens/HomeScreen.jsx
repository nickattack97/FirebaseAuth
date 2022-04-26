import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'

const HomeScreen = () => {

  const navigation = useNavigation()


  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity 
      onPress={handleSignOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  inputContainer:{
      width: '80%',
  },
  input:{
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
  },
  button:{
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
  },
  buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 14,

  },      
})