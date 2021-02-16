import { API } from "../../../backend";

export const getProducts = () => {
    return fetch(`${API}`).then(response => response.json()).catch(err => console.log(err));
}