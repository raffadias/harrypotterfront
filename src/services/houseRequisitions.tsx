import axios from 'axios';
const baseURL = 'https://wizard-world-api.herokuapp.com';

export async function getAllHouses() {
    return axios.get(`${baseURL}/Houses`);
}

export async function getHouseById(houseId : string) {
    return axios.get(`${baseURL}/Houses/${houseId}`);
}