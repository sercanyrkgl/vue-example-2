<script>
import ComponentOne from "../components/ComponentOne.vue"

export default {

  components: { ComponentOne },

  data() {

    return {

      name: null,
      pokemon: null

    }
  },

  methods: {

    async fetchPokemon() {

      try {
        const response = await this.$fetchPokemons()

        this.pokemon = response
      } catch (error) {

      }

    }
  }

}

</script>

<template>
  <main>


    <div style='padding: 40px; border: 1px solid red'>

      <input type="text" v-model='name'>

      <button @click='fetchPokemon'>Click</button>

    </div>

    <div>{{ pokemon }}</div>

    <ComponentOne />

  </main>
</template>
