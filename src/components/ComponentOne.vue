<template>
    <div>

        <input type="text" v-model='name'>

        <button @click='fetchPokemon'>Click</button>

        <div>{{ pokemon }}</div>

    </div>
</template>

<script>
export default {

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
