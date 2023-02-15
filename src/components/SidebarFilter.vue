<template>
  <p class="text-decoration-none">
    <a
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
      >Styles</a
    >
  </p>
  <div class="collapse" id="collapseExample">
    <ul class="list-group list-group-flush">
      <li class="list-group-item border-0" v-for="s in styles" :key="s">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :value="s"
            :id="s"
            v-model="checkedCategories"
            @change="$emit('filterChange', makeFilter())"
          />
          <label class="form-check-label" :for="s"> {{ s }} </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarFilter",
  emits: ["filterChange"],
  data() {
    return {
      checkedCategories: [],
      styles: ["Loft", "Modern", "Bachelor"],
    };
  },
  methods: {
    makeFilter: function () {
      let filterString = "";
      for (const s of this.checkedCategories) {
        filterString = filterString + "%2C" + s.toLowerCase();
      }
      const l = filterString.slice(3)
      return "?styles=" + l;
    },
  },
};
</script>

<style scoped></style>
