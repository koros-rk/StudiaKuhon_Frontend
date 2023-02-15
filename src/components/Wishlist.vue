<template>
  <button type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#Wishlistmodal">
    Wishlist
  </button>

  <div class="modal fade" id="Wishlistmodal" tabindex="1" aria-labelledby="WishlistmodalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="WishlistmodalLabel">Wishlist</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-for="p in Wishlist.get()" :key="p">
            <wishlist-item :product="p"></wishlist-item>
          </div>
        </div>
        <div class="modal-footer">
          <button v-if="Wishlist.get().length != 0" @click="Wishlist.order()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Order</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import WishlistItem from "./WishlistItem.vue";
import { useWishlistStore } from "../stores/WishlistStore";

export default {
  name: "Wishlist",
  components: { WishlistItem },
  setup() {
    const Wishlist = useWishlistStore()
    return { Wishlist }
  },
};
</script>

<style scoped>

</style>