<template>
  <div class="home-view-container">
    <h1>Adopt new best friend</h1>
    {{ getAllCats.length }}
    {{ animalsCount }}
    <button class="btn btn-primary" @click="togglePetForm">
      Add new pet
    </button>

     <b-form @submit.prevent="handleSubmit" v-if="isShowPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
        type="number"
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      isShowPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats'])
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm () {
      this.isShowPetForm = !this.isShowPetForm
    },
    handleSubmit () {
      const { species, name, age } = this.formData
      const payload = {
        species,
        pet: {
          name, age
        }
      }
      this.addPet(payload)

      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
