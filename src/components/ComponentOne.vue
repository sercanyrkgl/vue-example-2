<script>
import { useDataStore } from '../stores/data.js'
import ComponentTwo from '../components/ComponentTwo.vue'
export default {

    components: { ComponentTwo },

    provide() {

        return {

            helloFromOneProvide: 'Hello from One Provide'

        }
    },

    data() {

        return {

            useDataStore: useDataStore(),
            name: null,
            pokemon: null,
            helloFromOne: 'Hello from One'
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
    <div style='padding: 16px;margin: 8px; border: 2px solid blue;'>

        <div>Component 1</div>

        <div>{{ helloFromOne }}</div>

        <div>{{ useDataStore.helloFromPinia }}</div>

        <div>{{ useDataStore.name }}</div>
        <ComponentTwo :helloFromOne='helloFromOne' />

    </div>
</template>