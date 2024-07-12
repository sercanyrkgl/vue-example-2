<script>
import ComponentThree from '../components/ComponentThree.vue'

export default {

    props: ['helloFromOne'],

    components: { ComponentThree }
}
</script>
<template>
    <div style='padding: 16px;margin: 8px; border: 2px solid orange;'>

        <div>Component 2</div>
        <div>{{ helloFromOne }}</div>

        <ComponentThree :helloFromOne='helloFromOne' />

    </div>
</template>