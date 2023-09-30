import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../constants/Fonts'
import LoginForm from '../../components/Auth/Login/LoginForm';
import RegisterForm from '../../components/Auth/Register/RegisterForm';

export default function AuthScreen() {

  //const [isLogin, setIsLogin] = useState(true);
 
  //const changeForm = () => {
    //setIsLogin(!isLogin);
  //}
  const [showLogin, setShowLogin] = useState(true);
 
  const showLoginRegister = () => {
    setShowLogin(prevState => !prevState)
  }

  {/* <View style={styles.container}>
      <Text style={{fontFamily:Fonts.family.bold, fontSize: Fonts.size.large, marginVertical: 20}}>AuthScreen</Text>
       <SocialButton title="Iniciar sesión con Facebook" imageType="facebook" color={Colors.facebookColor}/> 
      <SocialButton title="Iniciar sesión con Google" imageType="google" color={Colors.googleColor}/> 
       <SocialButton title="Iniciar sesión con Twitter" imageType="twitter" color={Colors.twitterColor}/> 
    </View> */}

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View alignItems='center'>
    <Image source={require("../../assets/logo.png")} style={{width: 100, height: 100, justifyContent: 'center'}}/>
    </View>   
    <Text style={{ fontFamily: Fonts.family.bold, fontSize: Fonts.size.large, marginVertical: 20, textAlign: "center" }}>{showLogin ? "Iniciar sesión" : "Registrarse"}</Text>
    {showLogin ? <LoginForm showRegister={showLoginRegister} /> : <RegisterForm showLogin={showLoginRegister} />}    
    </KeyboardAvoidingView>
    </View>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  } 
}) 