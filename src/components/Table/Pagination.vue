<template>
    <div class="pagination-table">
        <k-button icon="angle-double-left" iconColor="#000"/>
        <k-button icon="angle-left" iconColor="#000"/>
        <span>
            {{pageSettings.page}} - {{pageSettings.total}}
        </span>
        <k-button icon="angle-right" iconColor="#000"/>
        <k-button icon="angle-double-right" iconColor="#000"/>
    </div>
</template>

<script lang="ts">
import { IPageSettings } from '@/types'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Row extends Vue {
    @Model('update:pageSettings', {
        default: {
            page: 1,
            limit: 5,
            pages: 5,
            total: 10
        } as IPageSettings
    })
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
    .pagination-table {
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
            margin: 0 5px;
        }
    }
</style>