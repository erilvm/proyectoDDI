import React from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
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
        updateUser('email', formData.email);

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
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TextInput
            label="Correo electrónico"
            autoCapitalize="none"
            onChangeText={(text) => formik.setFieldValue('email', text)}
            value={formik.values.email}
            error={formik.errors.email}
            style={styles.input}
          />
          <Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting } 
            style={{
              backgroundColor: 'green',
              borderRadius: 15,
              width: 200,
              top: 85
            }}>
            Actualizar email
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    borderRadius: 15,
    width: 290,
    height: 65,
    top: 70,
  },
});
