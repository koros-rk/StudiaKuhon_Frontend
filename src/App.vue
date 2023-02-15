<template>
  <div class="container-fluid text-center p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand" href="#">Studia Kuhon</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-item nav-link" to="/projects">Projects</RouterLink>
          <RouterLink class="nav-item nav-link" to="/about">About us</RouterLink>
          <RouterLink class="nav-item nav-link" to="/faq">F.A.Q</RouterLink>
        </div>
      </div>
      <wishlist></wishlist>
      <login-popup></login-popup>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import LoginPopup from "./components/LoginPopup.vue";
import { RouterLink, RouterView } from 'vue-router'
import Wishlist from "./components/Wishlist.vue";

</script>


