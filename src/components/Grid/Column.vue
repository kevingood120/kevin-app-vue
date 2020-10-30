<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Column extends Vue {
    @Prop({
        default: 1
    })
    cols!: number

    get classes() {
        return {
            column: true,
            ['column-' + this.cols]: true
        }
    }
}
</script>

<style lang="scss" scoped>
    $sizes: 1,2,3,4,5,6,7,8,9,10,11,12;
    @each $size in $sizes {
        .column-#{$size} {
            flex-basis: (100 * $size / 12) * 1%;
        }
    }
</style>