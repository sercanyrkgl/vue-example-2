export default {

    install(app) {

        app.config.globalProperties.$fetchPokemons = async () => {

            const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

            const response = await res.json()

            return response

        }

    }
}