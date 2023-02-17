<template>
  <section>
    <h2>Submitted Experiences</h2>
    <div>
      <base-tab-button @click="loadExperiences">
        Load Submitted Experiences
      </base-tab-button>
    </div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && error">{{ error }}</p>
    <p v-else-if="!isLoading && (!results || results.length === 0)">
      No stored experiences found. start adding some survey resutl first
    </p>

    <ul v-else>
      <li>
        <contact-record v-for="result in results" :key="result.id"
                        :name="result.name"
                        :rating="result.rating"
        ></contact-record>
      </li>
    </ul>
  </section>
</template>


<script setup>
import {onMounted, reactive, ref} from "vue";
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
import ContactRecord from "@/pages/about/ContactRecord.vue";

const isLoading = ref(false)
const results = reactive([])
const error = ref(null)
const loadExperiences = () => {
  isLoading.value = true;
  error.value = null;
  fetch(
    'https://vue-http-demo-e033e-default-rtdb.firebaseio.com/surveys.json'
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isLoading.value = false;
      results.length = 0
      for (const id in data) {
        results.push({
          id: id,
          name: data[id].name,
          rating: data[id].rating,
        });
      }
    })
    .catch((error) => {
      isLoading.value = false;
      console.log(error.value);
      error.value = 'Failed to fetch data - please try again later';
    });
}

onMounted(()=>{
  loadExperiences()
})
</script>
<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>