import { DefaultAPIInstance } from "./index";

export const AuthAPI = {
  /**
   *
   * @param login
   * @param password
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  login(login, password) {
    const url = "auth/token/login/";
    const data = { username: login, password: password };
    return DefaultAPIInstance.post(url, data);
  },

  /**
   *
   * @param Token
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  logout(Token) {
    const url = "auth/token/logout/";
    return DefaultAPIInstance.post(url);
  },
};