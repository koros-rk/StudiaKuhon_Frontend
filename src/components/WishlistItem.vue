<template>
  <div class="card mb-3 border-0" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4 py-4">
        <img :src="product.main_photo" class="img-fluid rounded" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body text-start">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description_shorted }}</p>
          <button type="button" class="btn btn-secondary" @click="Wishlist.delete(product.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWishlistStore } from "../stores/WishlistStore";

export default {
  name: "WishlistItem",
  props: {
    product: {
      type: Object,
      default: () => ({
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