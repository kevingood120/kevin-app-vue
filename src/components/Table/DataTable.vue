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
        <pagination v-model="pagination"></pagination>
    </div>
</template>

<script lang="ts">
import { IHeader, IPageSettings } from '@/types'
import { Component, Model, Prop, Vue, Watch } from 'vue-property-decorator'
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

    pagination: any = {}

    @Watch('pagination', {
        deep: true,
        immediate: true
    })
    paginationWatch(value: any) {
        console.log(value)
    }
}
</script>

<style lang="scss" scoped>
    .container-table {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 10px 0px;
        .responsive {
            .table {
                width: 100%;

                &, td, th {
                    border-collapse: collapse;
                }

                th {
                    color: rgba(0,0,0,.6);
                }

                td,th {
                    padding: 12px 10px;
                    text-align: left;
                }

                tr {
                    border-bottom: 1px solid rgba(156, 111, 111, 0.2);
                }

                tbody {
                    tr:hover {
                        background-color: rgba(0,0,0,.03);
                    }
                }
            }
        }
    }
</style>