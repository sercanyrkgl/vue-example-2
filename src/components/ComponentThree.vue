<script>
import ComponentFour from '../components/ComponentFour.vue'
import { useDataStore } from '../stores/data.js'

export default {

    props: ['helloFromOne'],

    components: { ComponentFour },

    data() {

        return {

            useDataStore: useDataStore()
        }
    },

    computed: {

        sayMyName() {

            return 'kaan'

        }
    },

    methods: {

    }
}
</script>
<template>
    <div style='padding: 16px;margin: 8px; border: 2px solid green;'>

        <div>Component 3</div>
        <div>{{ helloFromOne }}</div>
        <div>{{ useDataStore.name.toUpperCase() }}</div>

        <div>{{ `my number is ${useDataStore.number}` }}</div>

        <button @click='useDataStore.add()'>Click</button>
        <div>{{ useDataStore.pokemon }}</div>


        <div>{{ sayMyName }}</div>

        <div>{{ useDataStore.reactiveName }}</div>

        <ComponentFour :helloFromOne='helloFromOne' />

    </div>
</template>