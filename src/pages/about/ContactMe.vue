<template>
  <section>
    <form @submit.prevent="submitSurvey">
      <div class="form-control">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model.trim="enteredName" />
      </div>
      <h3>My experience was ...</h3>
      <div class="form-control">
        <input
          type="radio"
          id="rating-poor"
          value="poor"
          name="rating"
          v-model="chosenRating"
        />
        <label for="rating-poor">Poor</label>
      </div>
      <div class="form-control">
        <input
          type="radio"
          id="rating-average"
          value="average"
          name="rating"
          v-model="chosenRating"
        />
        <label for="rating-average">Average</label>
      </div>
      <div class="form-control">
        <input
          type="radio"
          id="rating-great"
          value="great"
          name="rating"
          v-model="chosenRating"
        />
        <label for="rating-great">Great</label>
      </div>
      <p v-if="invalidInput">
        One or more input fields are invalid. Please check your provided data.
      </p>
      <p v-if="error">{{ error }}</p>
      <div>
        <base-tab-button>Submit</base-tab-button>
      </div>
    </form>
  </section>
</template>
<script setup>
import BaseTabButton from "@/components/UI/BaseTabButton.vue";
import {ref} from "vue";

const enteredName = ref('')
const chosenRating = ref(null)
const invalidInput = ref(false)
const error = ref(null)
const submitSurvey = ()=>{
  if (enteredName.value === '' || !chosenRating.value) {
    invalidInput.value = true;
    return;
  }
  invalidInput.value = false;
  error.value = null;
  fetch(
    'https://vue-http-demo-e033e-default-rtdb.firebaseio.com/surveys.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: enteredName.value,
        rating: chosenRating.value,
      }),
    }
  )
    .then((response) => {
      if (response.ok) {
        // ...
      } else {
        throw new Error('Could not save data!');
      }
    })
    .catch((error) => {
      error.value = error.message;
    });

  enteredName.value = '';
  chosenRating.value = null;
}
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>