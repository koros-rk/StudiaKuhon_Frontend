<template>
  <div class="card text-black px-3 my-2">
    <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
    <img :src="product.main_photo" class="card-img" :alt="product.title" />
    <div class="card-body">
      <div class="text-start">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="text-muted mb-4">
          {{ product.description_shorted }}
        </p>
      </div>
      <button type="button" class="btn btn-secondary" @click="Wishlist.add(product.id, product.title, product.description_shorted, product.main_photo)">Add to wishlist</button>
    </div>
  </div>
</template>

<script>
import { useWishlistStore } from "../stores/WishlistStore";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => ({
        id: Number,
        title: String,
        description_shorted: String,
        main_photo: String,
      }),
    },
  },
  setup() {
    const Wishlist = useWishlistStore()
    return { Wishlist }
  },
};
</script>

<style scoped></style>
