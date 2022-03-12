import axios from "axios";

// url would be hidden in .env file in real project //
const baseUrl: string = "http://localhost:3001/users";

type UserType = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    comment: string;
};

export const getUsers = (): Promise<UserType[]> => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

export const createUser = (user: UserType): Promise<UserType> => {
    const request = axios.post(baseUrl, user);
    return request.then((response) => response.data);
};

export const removeUser = (id: string): Promise<UserType> => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
};
