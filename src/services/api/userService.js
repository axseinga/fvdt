import axios from "axios";

// url would be hidden in .env file in real project //
const baseUrl = "http://localhost:3001/users";

export const getUsers = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

export const createUser = (user) => {
    const request = axios.post(baseUrl, user);
    return request.then((response) => response.data);
};

export const removeUser = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
};
