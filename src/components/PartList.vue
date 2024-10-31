<template>
  <div>
    <div v-for="part in parts" :key="part.id">
      <PartItem :part="part" @remove="removePart" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import PartItem from "./PartItem.vue";

export default {
  components: { PartItem },
  setup() {
    const store = useStore();

    const parts = computed(() => store.state.parts);

    const removePart = (id) => {
      store.dispatch("removePart", id);
    };

    return { parts, removePart };
  },
};
</script>
