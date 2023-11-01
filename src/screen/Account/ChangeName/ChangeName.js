import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';
import { userController } from '../../../api/users';


export default function ChangeName(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      firstname: user.firstname || '',
      lastname: user.lastname ||''
    },
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.update(user.id, formData);
        updateUser('firstname', formData.firstname);
        updateUser('lastname', formData.lastname);

        navigation.goBack();
        Toast.show('Datos actualizados con éxito', {
          position: Toast.positions.CENTER,
        });
      } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        Toast.show('Datos no actualizados, Error', {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <ImageBackground source={require('../../../assets/fondoHome2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          label="Nombre"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('firstname', text)}
          value={formik.values.firstname}
          error={formik.errors.firstname}
          style={styles.input}
        />

        <TextInput
          label="Apellido"
          onChangeText={(text) => formik.setFieldValue('lastname', text)}
          value={formik.values.lastname}
          error={formik.errors.lastname}
          style={styles.input}
        />


<Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting } 
          style={{
            backgroundColor: 'green', // Establece el color de fondo aquí
            borderRadius: 15, 
            width:200,
            top: 140,
          }}>
          Actualizar contraseña
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    top: -100,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  input: {
    marginBottom: 10,
    borderRadius: 15,
    width:290,
    height: 65,
    top: 125,
  },
});