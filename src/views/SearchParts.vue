<template>
  <div>
    <h1>Пошук запчастин</h1>

    <input v-model="query" placeholder="Введіть запит" />

    <div v-if="query.trim() && filteredParts.length">
      <div v-for="part in filteredParts" :key="part.id">
        <PartItem :part="part" />
      </div>
    </div>

    <div v-else-if="query.trim()">
      <p>Нічого не знайдено за вашим запитом.</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import PartItem from "../components/PartItem.vue";

export default {
  components: { PartItem },
  setup() {
    const store = useStore();
    const query = ref("");

    const filteredParts = computed(() =>
      store.getters.filteredParts(query.value)
    );

    return { query, filteredParts };
  },
};
</script>

<style>
#search {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  background-color: #1a1a4b;
  border-radius: 8px;
  color: #ffffff;
}

h1 {
  font-weight: 700;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
}

.search-input::placeholder {
  color: #b0b0b0;
}
</style>
