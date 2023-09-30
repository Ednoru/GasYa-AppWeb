import axios from 'axios';

const API_BASE_URL = 'https://my-json-server.typicode.com/Ednoru/GasYa-AppWeb/';

const UserService = {
  getUsers() {
    return axios.get(`${API_BASE_URL}/users`);
  },

  addUser(userData) {
    return axios.post(`${API_BASE_URL}/users`, userData);
  },
};

export default UserService;
