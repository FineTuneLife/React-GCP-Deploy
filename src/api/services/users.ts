import { axiosClient } from "../axiosClient";
import { User } from "../../models";

const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axiosClient.get('/users');
        await delay(500);

        const result: User[] = response.data;
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }

}
export { getUsers };

const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);