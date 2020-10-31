<template>
    <ul :class="classes">
        <li class="list-item" v-for="(item, index) in items" :key="index">
            <slot name="item" :item="item">

            </slot>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class List extends Vue {
    @Prop({
        type: Array,
        default: () => []
    })
    items!: any[]

    @Prop({
        type: Boolean,
        default: () => false
    })
    horizontal!: boolean

    get classes() {
        return {
            'list': true,
            'horizontal': this.horizontal
        }
    }
}
</script>

<style lang="scss" scoped>
    .list {
        width: 100%;
        display: flex;
        flex-direction: column;

        &.horizontal {
            flex-direction: row;
        }

        .list-item {
            width: 100%;
            padding: 10px;
        }
    }
</style>