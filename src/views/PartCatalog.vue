<template>
  <div>
    <h1>Каталог запчастин</h1>
    <PartList />
  </div>
</template>

<script>
import PartList from "../components/PartList.vue";

export default {
  components: { PartList },
};
</script>
<style>
#catalog {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  background-color: #1a1a4b;
  border-radius: 8px;
  color: #ffffff;
}

h1 {
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}
</style>
