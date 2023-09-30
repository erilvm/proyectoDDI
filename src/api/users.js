import { ENV } from "../utils/constants";

const getMe = async (token) => {
    try {
        const response = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjk2MDQ5OTY0LCJleHAiOjE2OTg2NDE5NjR9._smzY-5GyhXsU2YrQQCAPfGi3Rzw_SkZFYM5SjOqP2o'}`
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const userController = {
    getMe
};
