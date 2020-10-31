<template>
    <div class="pagination-table">
        <k-button :disabled="(pageSettings.page <= 1)" icon="angle-double-left" @click="paginationClick(pageSettings.page = 1)" iconColor="#000"/>
        <k-button :disabled="(pageSettings.page <= 1)" icon="angle-left" @click="paginationClick(pageSettings.page -= 1)" iconColor="#000"/>
        <span>
            {{pageSettings.page}} - {{pageSettings.pages}}
        </span>
        <k-button icon="angle-right" :disabled="(pageSettings.page === pageSettings.pages)" @click="paginationClick(pageSettings.page += 1)" iconColor="#000"/>
        <k-button icon="angle-double-right" :disabled="(pageSettings.page === pageSettings.pages)" @click="paginationClick(pageSettings.page = pageSettings.pages)" iconColor="#000"/>
    </div>
</template>

<script lang="ts">
import { IPageSettings } from '@/types'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Pagination extends Vue {

    @Prop({
        default: () => ({
            page: 1,
            limit: 5,
            total: 30,
            get pages() {
                return Math.ceil(this.total / this.limit)
            }
        } as IPageSettings)
    })
    pageSettings!: IPageSettings

    paginationClick(newPage: number) {
        this.$emit('input', {
            ...this.pageSettings,
            page: newPage
        })
    }
}
</script>

<style lang="scss" scoped>
    .pagination-table {
        display: flex;
        align-items: center;
        padding: 5px 20px;
        justify-content: flex-end;

        & > * {
            margin: 0 5px;
        }

        margin: 5px 0px;
    }
</style>