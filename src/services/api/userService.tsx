import axios from "axios";
import { UserType } from "components/types/types";

// url would be hidden in .env file in real project //
const baseUrl: string = "http://localhost:3001/users";

export const getUsers = (): Promise<UserType[] | void> => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

export const createUser = (user: UserType): Promise<UserType | void> => {
    const request = axios.post(baseUrl, user);
    return request.then((response) => response.data);
};

export const removeUser = (id: string): Promise<UserType | void> => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
};
