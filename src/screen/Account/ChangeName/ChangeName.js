import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';
import { initialValues, validationSchema } from './ChangeNameForm';
import { userController } from '../../../api/users';
import { AsyncStorage } from 'react-native';



export default function ChangeName(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
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
    <ImageBackground source={require('../../../assets/fondoPerfil.jpg')} style={styles.backgroundImage}>
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

        <Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting}>
          Actualizar datos
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
    justifyContent: 'center',
  },
  input: {
    marginBottom: 15, // Añadir margen inferior para separar los TextInput
  },
});
