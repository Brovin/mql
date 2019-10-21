import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY" : "a9ded603-e95c-4bad-897d-02fb9325f839"
  }
});

export const usersApi = {
  getUsers(page, count) {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data);
  },

  getProfile(id) {
    return instance.get(`profile/${id}`);
  }
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  }
};