import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useDataStore = defineStore('data', {
    state: () => {
        return {

            pokemon: null,
            helloFromPinia: 'Hello from pinia',
            name: 'Kaan',
            number: 0

        }
    },

    getters: {

        reactiveName(state) {

            return state.name.toUpperCase()

        }
    },

    actions: {

        async fetchFromStore() {

            const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

            const response = await res.json()

            this.pokemon = response

        },

        add() {

            this.number++

        }

    }
})
