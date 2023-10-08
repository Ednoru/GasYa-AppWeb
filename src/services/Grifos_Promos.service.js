import axios from "axios";

const grifosPromos_api = 'http://localhost:3000';

export const getGrifos = async () => {
    const response = await axios.get(`${grifosPromos_api}/grifos`);
    return response.data;
}

export const getPromos = async () => {
    const response = await axios.get(`${grifosPromos_api}/promos`);
    return response.data;
}
