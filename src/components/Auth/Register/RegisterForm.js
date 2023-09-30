import { View, Text, Alert, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { styles } from './RegisterForm.styles'
import { TextInput, Button } from 'react-native-paper';
import { globalStyles } from '../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {authApi} from '../../../api/auth'
import Fonts from '../../../constants/Fonts'

import Toast from 'react-native-root-toast';

export default function RegisterForm(props) {
  // Definir un estilo común
const commonTextStyle = {
  fontFamily: Fonts.family.bold,
  fontSize: Fonts.size.medium,
  marginVertical: 20,
};


  const { showLogin} = props;
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const { email, username, password } = formData;
      try {
        await authApi.register(email, username, password)
        console.log("Usuario registrado")
        Alert.alert('Registro exitoso', 'Usuario registrado correctamente'); // Show success alert
        //navigation.navigate('LoginForm'); // Navigate to login screen
        showLogin();
      } catch (error) {
        console.log(error);
        Alert.alert('Error', 'No se pudo completar el registro. Por favor, inténtalo de nuevo.');
  
      }
    }
  })


  return (
    <View >
      <TextInput
        label="Nombre de usuario"
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />

      <TextInput
        label="Correo electronico"
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />

      <TextInput
        label="Contraseña"
        secureTextEntry={true}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />

       <TextInput
        label="Repetir contraseña"
        secureTextEntry={true}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      /> 
      <Button 
       mode="contained" 
       style={globalStyles.buttonText}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}>
        Registrarse
        
       </Button>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={commonTextStyle}>¿Ya tienes cuenta?</Text>
        
        <TouchableOpacity onPress={showLogin} style={{ marginLeft: 10 }}>
          <Text style={{ ...commonTextStyle, color: '#4169E1' }}>Inicia Sesión</Text>
        </TouchableOpacity>
        </View>

    </View>
  )
}
