import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';
import { userController } from '../../../api/users';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function ChangePassword(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '' // Inicializa el campo de contraseña vacío
    },
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.update(user.id, formData);
        updateUser('password', formData.password);

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
          label="Nueva contraseña"
          secureTextEntry={!showPassword}
          onChangeText={(text) => formik.setFieldValue('password', text)}
          value={formik.values.password}
          style={styles.input}
          right={
            <TextInput.Icon
              name={() => (
                <FontAwesomeIcon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={20}
                  color="blue"
                />
              )}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button mode="contained" onPress={formik.handleSubmit} loading={formik.isSubmitting } 
          style={{
            backgroundColor: 'green', 
            borderRadius: 15, 
            width: 200,
            top: 105
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
    marginBottom: 20,
    borderRadius: 15,
    width: 290,
    height: 65,
    top: 100,
  },
});
