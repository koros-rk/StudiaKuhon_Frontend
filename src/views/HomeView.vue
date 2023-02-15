<template>
  <main>
    <h1>Home</h1>
    <h1>{{ AuthStore.Token }}</h1>
  </main>
</template>

<script>
import { useAuthStore } from "../stores/AuthStore";

export default {
  name: "HomeView",
  setup() {
    const AuthStore = useAuthStore()
    return { AuthStore }
  },

  data() {
    return {
    };
  },

  methods: {
  },
};
</script>