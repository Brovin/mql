import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "a9ded603-e95c-4bad-897d-02fb9325f839"
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
  }
};

export const profileApi = {
  getProfile(id) {
    return instance.get(`profile/${id}`);
  },

  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status});
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha});
  },
  logout() {
    return instance.delete(`auth/login`);
  }
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
};