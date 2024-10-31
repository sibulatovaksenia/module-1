<template>
  <div>
    <h1>Додати нову запчастину</h1>

    <div>
      <input v-model="newPart.name" placeholder="Назва запчастини" />
      <input v-model="newPart.carBrand" placeholder="Марка автомобіля" />
      <input v-model="newPart.year" type="number" placeholder="Рік випуску" />
      <button @click="addPart">Додати запчастину</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const newPart = ref({
      name: "",
      carBrand: "",
      year: null,
    });

    const addPart = () => {
      if (newPart.value.name && newPart.value.carBrand && newPart.value.year) {
        store.dispatch("addPart", { ...newPart.value, id: Date.now() });
        newPart.value = { name: "", carBrand: "", year: null };
        router.push("/catalog");
      } else {
        alert("Будь ласка, заповніть усі поля.");
      }
    };

    return {
      newPart,
      addPart,
    };
  },
};
</script>

<style>
#add-part {
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
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  padding: 10px;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #36a072;
}
</style>
