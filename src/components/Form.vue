<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Form extends Vue {

}
</script>

<style lang="scss" scoped>
    .form {
        
    }
</style>