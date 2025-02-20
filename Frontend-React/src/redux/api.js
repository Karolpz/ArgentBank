import axios from "axios";

//CONNEXION USER//
export const loginUserAPI = async (userData) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/api/v1/user/login',
            userData,
        );
        return response.data.body.token;
    } catch (error) {
        console.log('erreur lors de la connexion', error);
        throw error;
    }
    ;
}

//ID USER//
export const getUserAPI = async (token) => {
    try {
        const response = await axios.get(
            'http://localhost:3001/api/v1/user/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return response.data.body;
    } catch (error) {
        console.log('erreur lors de la connexion', error);
        throw error;
    }
    ;
}

//CHANGE USERNAME//
export const newUsernameAPI = async (newUsername, token) => {
    try {
        const response = await axios.put(
            'http://localhost:3001/api/v1/user/profile',
            { userName: newUsername },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data.body.userName;
    } catch (error) {
        console.log('erreur lors de la connexion', error);
        throw error;
    }
    ;
}