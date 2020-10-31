<template>
    <header class="header">
        <k-button icon="bars" @click="$emit('toggle')" iconSize="1.3rem" iconColor="#000"></k-button>
        <span style="margin-left: 10px">Sistema</span>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
 
@Component({

})
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>
    .header {
        background-color: $primary;
        height: 55px;
        display: flex;
        padding: 0px 10px;
        align-items: center;
    }
</style>