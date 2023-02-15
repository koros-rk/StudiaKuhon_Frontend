import { defineStore } from "pinia";
import { DefaultAPIInstance } from "../AuthAPI";

export const useWishlistStore = defineStore("WishlistStore", {
  state: () => {
    return {
      products: []
    }
  },

  actions: {
    get() {
      return this.products
    },
    add(id, title, description_shorted, thumbnail_photo) {
      if ( this.products.find(x => x.id === id) == null) {
        this.products.push({
          id: id,
          title: title,
          description_shorted: description_shorted,
          main_photo: thumbnail_photo,
        });
      }

    },
    delete(id) {
      this.products = this.products.filter(obj => obj.id != id)
    },
    order() {
      DefaultAPIInstance.post('order', {'products': this.products}).catch(e => alert(e))
      this.products = []
    },
  },

  persist: true,
});
