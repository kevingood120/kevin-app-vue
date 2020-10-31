<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Container extends Vue {

}
</script>

<style lang="scss" scoped>
    .container {
        height: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 10px 0px;
    }
</style>