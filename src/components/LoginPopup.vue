<template>
  <button v-if="AuthStore.Token" type="button" class="btn btn-dark mx-3" @click="Logout">
    Logout
  </button>
  <button v-else type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Login
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="login" type="text" placeholder="login" class="my-1 input-group"/><br />
          <input v-model="password" type="text" placeholder="password" class="my-1 input-group"/><br />
          <button @click="Login" class="btn btn-primary mx-1" data-bs-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/AuthStore";

export default {
  name: "LoginPopup",
  setup() {
    const AuthStore = useAuthStore()
    return { AuthStore }
  },

  data() {
    return {
      login: null,
      password: null,
    };
  },

  methods: {
    async Login() {
      await this.AuthStore.login(this.login, this.password)
    },
    async Logout() {
      await this.AuthStore.logout()
    }
  },
};
</script>

<style scoped>

</style>