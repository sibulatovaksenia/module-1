<template>
  <div class="part-item">
    <h3>{{ part.name }}</h3>
    <p>Марка: {{ part.carBrand }}</p>
    <p>Рік випуску: {{ part.year }}</p>
    <button @click="$emit('remove', part.id)">Видалити</button>
  </div>
</template>

<script>
export default {
  props: {
    part: Object,
  },
};
</script>
