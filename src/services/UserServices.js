import axios from 'axios';

const UserService = {
  getUsers() {
    return axios.get('@/sevices/users.json');
  },

  
};

export default UserService;
