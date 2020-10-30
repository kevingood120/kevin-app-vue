<template>
    <transition name="fade">
        <div v-if="show" class="backdrop">
            <div :style="{ width }" class="modal">
                <div class="modal-header">
                    {{title}}
                    <k-button icon @click="show = false">
                        <fa-icon icon="times" size="lg" color="#fff"/>
                    </k-button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
 
@Component({})
export default class Modal extends Vue {
    @Model('update:show',{
        default: false
    })
    _show!: boolean

    @Prop()
    title!: string

    @Prop({
        default: '300px'
    })
    width!: string

    get show() {
        return this._show
    }

    set show(value: boolean) {
        this.$emit('update:show', value)
    }
}
</script>

<style lang="scss" scoped>

    $padding-left-right: 10px;

    div.backdrop {
        z-index: $index-modal;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        &.fade-enter {
            opacity: 0;
        }

        &.fade-enter-active {
            transition: opacity 500ms;
        }

        &.fade-leave {
            opacity: 1;
        }

        &.fade-leave-active {
            opacity: 0;
            transition: opacity 500ms;
        }

        .modal {
            display: flex;
            flex-direction: column;

            .modal-header {
                background-color: $primary;
                padding: 5px $padding-left-right;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-body {
                flex: 1;
                background-color: $bg-color;
                padding: 10px $padding-left-right;
            }
        }
    }
</style>