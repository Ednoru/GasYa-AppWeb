import axios from 'axios';

const UserService = {
  getUsers() {
    return axios.get('@/sevices/users.json');
  },

  // Puedes agregar más métodos si los necesitas
};

export default UserService;