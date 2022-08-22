import axios from 'axios';
const baseURL = 'https://wizard-world-api.herokuapp.com';

export async function getSpells(type : string) {
    return axios.get(`${baseURL}/Spells?Type=${type}`);
}