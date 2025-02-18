import axios from "axios"

const userData = {
    email: 'tony@stark.com',
    password: 'password123'
}

export const  GET_USERS ='GET_USERS'

const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                'http://localhost:3001/api/v1/user/login',
                userData
            );
            dispatch ({
                type: GET_USERS,
                payload: response.data.body.token
            })
            return console.log(response.data.body.token);
        } catch (error) { console.log('erreur lors de la connexion', error); }
        ;
    }
}

export default getUsers