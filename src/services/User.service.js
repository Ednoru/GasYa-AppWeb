import axios from 'axios';

const user_api = 'https://my-json-server.typicode.com/Ednoru/GasYa-AppWeb';

const UserService = {
  getUsers() {
    return axios.get(`${user_api}/users`);
  },

  addUser(userData) {
    return axios.post(`${user_api}/users`, userData);
  },

};

export default UserService;
