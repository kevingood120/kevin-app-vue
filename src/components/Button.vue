<template>
    <button :class="classes" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {
    Variant
} from '@/types'
 
@Component({

})
export default class Button extends Vue {
    @Prop({
        default: null
    })
    variant!: Variant

    @Prop({
        default: false,
        type: Boolean
    })
    icon!: boolean

    get classes() {
        const _: any = {
            'btn': true,
            icon: this.icon,
        }
        if(this.variant) _[this.variant] = true
        return _
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        padding: 8px 15px;
        outline: none;
        border: none;
        display: inline-flex;
        align-items: center;
        transition: all .1s;
        justify-content: center;

        &.icon {
            width: 35px;
            height: 35px;
            background-color: transparent;
            border-radius: 50%;
            
            &:hover {
                background-color: rgba(0,0,0,.2);
            }

            &:active {
                background-color: rgba(0,0,0,.5);
            }
        }

        @include variant-classes();
    }
</style>