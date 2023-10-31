import axios from "axios";

const grifosPromos_api = 'https://my-json-server.typicode.com/Ednoru/GasYa-AppWeb';

export const getGrifos = async () => {
    const response = await axios.get(`${grifosPromos_api}/grifos`);
    return response.data;
}

export const getPromos = async () => {
    const response = await axios.get(`${grifosPromos_api}/promos`);
    return response.data;
}
