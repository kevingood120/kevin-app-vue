<template>
    <button :class="classes" v-on="$listeners" v-bind="$attrs">
        <fa-icon v-if="icon" :style="{ fontSize: iconSize, color: iconColor }" :icon="icon"></fa-icon>
        <slot v-else>

        </slot>
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
        default: '',
        type: String
    })
    icon!: string

    @Prop({
        default: 'lg',
        type: String
    })
    iconSize!: string

    @Prop({
        default: '#fff',
        type: String
    })
    iconColor!: string

    get classes() {
        const _: any = {
            'btn': true,
            icon: !!this.icon,
            ['px-0']: true
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
        cursor: pointer;

        &:disabled {
            pointer-events: none;
            opacity: .65;
        }

        &.icon {
            width: 35px;
            height: 35px;
            background-color: transparent;
            border-radius: 50%;
            padding: 20px;
            
            &:hover {
                background-color: rgba(0,0,0,.05);
            }

            &:active {
                background-color: rgba(0,0,0,.1);
            }
        }

        @include variant-classes();
    }
</style>