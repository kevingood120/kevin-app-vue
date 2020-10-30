<template>
    <div class="field-container">
        <div class="field">
            <input class="form-control" placeholder=" " v-if="type !== 'textarea'" :id="name" :name="name" :type="type">
            <textarea placeholder=" " rows="4" class="form-control" v-else :name="name" :id="name"></textarea>
            <label class="form-label" :for="name">{{label}}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class TextField extends Vue {

    @Prop()
    name!: string

    @Prop()
    label!: string

    @Prop({
        default: 'text'
    })
    type!: string

}
</script>

<style lang="scss" scoped>
    .field-container {
        width: 100%;
        .field {
            padding-top: calc(.8rem + 2px);
            padding-bottom: .8rem;
            display: flex;
            flex-direction: column;
            position: relative;
            font-size: 1rem;

            .form-control {
                width: 100%;
                border-radius: 0;
                border: none;
                resize: none;
                background-color: transparent;
                border-bottom: 1px solid #000;
                outline: none;
                padding: 2px 0px;
                font-size: inherit;

                &:focus {
                    border-bottom-color: $primary;
                }

                &:focus + .form-label,
                &:not(:placeholder-shown) + .form-label {
                    
                    top: 0;
                    transform: translateY(0);
                    font-size: .8rem;
                    color: $primary
                }
            }

            .form-label {
                pointer-events: none;
                font-size: inherit;
                position: absolute;
                top: calc(1rem + 2px);
                left: 0;
                transition: all 300ms;
            }

        }
    }
</style>