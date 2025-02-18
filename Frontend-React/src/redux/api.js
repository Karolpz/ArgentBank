import axios from "axios";

//CONNEXION USER//
export const loginUserAPI = async (userData) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/api/v1/user/login',
            userData,
        );
        return response.data.body.token;
    } catch (error) { console.log('erreur lors de la connexion', error); }
    ;
}