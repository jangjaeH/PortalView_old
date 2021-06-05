<template>
    <component :is="layout">
        <slot/>
    </component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'TheLayout'
})
class TheLayout extends Vue{

}

export default  TheLayout;
</script>

<style scoped>

</style>