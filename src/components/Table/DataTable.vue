<template>
    <div class="container-table">
        <div class="responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th v-for="(header, index) in headers" :key="index">
                            {{header.text}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in data" :key="row.id">
                        <td v-for="(header, index) in headers" :key="index">
                            <slot :name="header.property" :header="header" :row="row">
                                {{row[header.property]}}
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pagination v-model="pageSettings"></pagination>
    </div>
</template>

<script lang="ts">
import { IHeader, IPageSettings } from '@/types'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import Pagination from './Pagination.vue'
 
@Component({
    components: {
        Pagination
    }
})
export default class DataTable extends Vue {
    @Prop({
        required: true
    })
    headers!: IHeader[]

    @Prop({
        required: true
    })
    data!: any[]

    @Model('update:page-settings')
    _pageSettings!: IPageSettings

    get pageSettings() {
        return this._pageSettings
    }

    set pageSettings(value: IPageSettings) {
        this.$emit('update:page-settings', value)
    }
}
</script>

<style lang="scss" scoped>
    .container-table {
        .responsive {
            .table {
                width: 100%;

                &, td, th {
                    border-collapse: collapse;
                }

                td,th {
                    padding: 8px 2px;
                    text-align: left;
                }

                th {
                    background-color: $primary;
                    color: #fff;
                }
            }
        }
    }
</style>