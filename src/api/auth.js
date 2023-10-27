import { ENV } from "../utils/constants";
import { userController } from "../../src/api/users";

//Esta funcion se usa  para el registro de usuario
async function register(email, username, password) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        }
        const response = await fetch(url, params);

        // Aqui se verifica si la respuesta no es exitosa y lanza un eerror
        if (response.status !== 200) throw response;

        return response.json();
    } catch (error) {
        throw error;
    }
}

// Esta funcion es para el inicio de sesión de usuario
async function login(email, password) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ identifier: email, password })
        }
        const response = await fetch(url, params);

        // Verifica si la respuesta no es exitosa y lanza un error
        if (response.status !== 200) throw response;

        // Aqui se obtiene los datos de respuesta en formato JSON
        const responseData = await response.json();

        // Aqui ya se obtienen los  detalles del usuario autenticado
        const meResponse = await userController.getMe(responseData.token);
        console.log('Detalles de usuario:', meResponse);

        return responseData;
    } catch (error) {
        throw error;
    }
}

// Exporta las funciones de registro e inicio de sesión
export const authApi = {
    register,
    login
};
