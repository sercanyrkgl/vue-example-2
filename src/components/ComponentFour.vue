<script>

import { useDataStore } from '../stores/data.js'

export default {

    data() {

        return {

            useDataStore: useDataStore()
        }
    },

    props: ['helloFromOne'],
    inject: ['helloFromOneProvide', 'fetchedPokemon']
}

</script>
<template>
    <div style='padding: 16px;margin: 8px; border: 2px solid red;'>

        <div>Component 4</div>

        <div>{{ helloFromOne }}</div>

        <div>{{ helloFromOneProvide }}</div>

        <button @click='useDataStore.fetchFromStore()'>Fetch Pokemon</button>

        <div>{{ fetchedPokemon }}</div>

    </div>
</template>