import { defineStore } from "pinia";
import { AuthAPI } from "../AuthAPI/Auth";
import { DefaultAPIInstance } from "../AuthAPI";

export const useAuthStore = defineStore("AuthStore", {
  state: () => {
    return { Token: null };
  },

  actions: {
    login(login, password) {
      AuthAPI.login(login, password)
        .then((response) => {
          this.Token = response.data.auth_token;
          DefaultAPIInstance.defaults.headers.common["Authorization"] = "Token " + response.data.auth_token
          // localStorage.setItem('token', response.data.auth_token)
        })
        .catch((e) => alert(e));
    },
    logout() {
      AuthAPI.logout(this.Token).catch(e => alert(e))
      delete DefaultAPIInstance.defaults.headers.common["Authorization"]
      this.Token = null
      localStorage.removeItem('token')
    },
  },
  persist: true,
});
