import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`; 
        const response = await authFetch(url);
        
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function updateUser(userId, formData) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
        const params = {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await authFetch(url, params);
        if (response.statusCode) throw "Error al actualizar usuario";
        return await response.json();
    } catch (error) {
        throw error;
    }
    
}

export const userController = {
    getMe,
    update: updateUser

}
