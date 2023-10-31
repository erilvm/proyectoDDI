import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';
import { userController } from '../../../api/users';


export default function ChangeEmail(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: user.email || ''
    },
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.update(user.id, formData);
        updateUser('email', formData.firstname);

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
    <ImageBackground source={require('../../../assets/fondo4.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          label="Correo electronico"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('email', text)}
          value={formik.values.email}
          error={formik.errors.email}
          style={styles.input}
        />

        <Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting}>
          Actualizar email
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
  },
  input: {
    marginBottom: 15, // Añadir margen inferior para separar los TextInput
  },
});
