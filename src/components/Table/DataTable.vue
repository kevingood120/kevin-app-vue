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
    </div>
</template>

<script lang="ts">
import { IHeader } from '@/types'
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

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
}
</script>

<style lang="scss" scoped>

</style>