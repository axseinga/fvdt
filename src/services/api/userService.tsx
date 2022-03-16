import axios from "axios";
import { UserType } from "components/types/types";

// url would be hidden in .env file in real project //
const baseUrl: string = "http://localhost:3001/users";

export const getUsers = async (): Promise<UserType[] | void> => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Cannot get users. Error: ${error}`);
    }
};

export const createUser = async (user: UserType): Promise<UserType | void> => {
    try {
        const response = await axios.post(baseUrl, user);
        return response.data;
    } catch (error) {
        throw new Error(`Cannot create an user. Error: ${error}`);
    }
};

export const removeUser = async (id: string): Promise<UserType | void> => {
    try {
        const respond = await axios.delete(`${baseUrl}/${id}`);
        return respond.data;
    } catch (error) {
        throw new Error(`Cannot remove an user. Error: ${error}`);
    }
};
