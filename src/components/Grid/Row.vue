<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Row extends Vue {

}
</script>

<style lang="scss" scoped>
    div.row {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: -2px;
        & > .column {
            padding: 2px;
        }
    }
</style>