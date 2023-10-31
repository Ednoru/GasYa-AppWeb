import axios from 'axios';

const user_api = 'https://my-json-server.typicode.com/Ednoru/GasYa-AppWeb';

const UserService = {
  getUsers() {
    return axios.get(`${user_api}/users`);
  },

  addUser(userData) {
    return axios.post(`${user_api}/users`, userData);
  },

  async passUsed(contrasena) {
      const response = await axios.get(`${user_api}/users?contrasena=${contrasena}`);
      return response.data.length > 0;
  }
};

export default UserService;
