<template>
  <h1>Projects</h1>

  <div class="row mx-5">
    <div class="col-3 border text-start">
      <sidebar-filter @filter-change="updateFilter"></sidebar-filter>
    </div>
    <div class="col-8 border">
      <section style="background-color: #eee">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div
              class="col-md-8 col-lg-6 col-xl-4"
              v-for="product in products"
              :key="product"
            >
              <product-card :product="product"></product-card>
              <!--              {{ products }}-->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SidebarFilter from "../components/SidebarFilter.vue";
import ProductCard from "../components/ProductCard.vue";
import { DefaultAPIInstance } from "../AuthAPI";

export default {
  name: "ProjectsView",
  components: { ProductCard, SidebarFilter },
  data() {
    return {
      filter: "",
      products: {},
      next: "",
      previous: "",
    };
  },

  methods: {
    updateFilter: async function (e) {
      this.filter = e;
      await this.fetchProducts();
    },
    fetchProducts: async function () {
      await DefaultAPIInstance.get("products/" + this.filter)
        .then((response) => {
          console.log(response.data)
          this.products = response.data.results;
          this.next = response.data.next;
          this.previous = response.data.previous;
        })
        .catch((e) => alert(e));
    },
  },

  async mounted() {
    await this.fetchProducts();
  },
};
</script>
