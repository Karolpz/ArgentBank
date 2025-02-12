import axios from "axios"

const data = {
    email:'tony@stark.com',
    password:'password123'
}

const getUsers = async (data) => {

        const response = await axios.post('localhost:3001/api/v1/user/login')
        console.log(response);
    
}

export default getUsers