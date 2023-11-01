import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';
import { userController } from '../../../api/users';
import { size } from 'lodash';


export default function ChangeUsername(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      username: user.username|| ''
    },
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.update(user.id, formData);
        updateUser('username', formData.username);

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
          label="Nombre de usuario"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('username', text)}
          value={formik.values.username}
          error={formik.errors.username}
          style={styles.input}
        />

        <Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting } 
          style={{
            backgroundColor: 'green', // Establece el color de fondo aquí
            borderRadius: 15, 
            width:200,
            top: 105
          }}>
          Actualizar usuario
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
    marginBottom: 20,
    borderRadius: 15,
    width:290,
    height: 65,
    top: 100,
  },
});
