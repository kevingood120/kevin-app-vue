<template>
    <transition name="fade-slide">
        <div @click.stop="$emit('update:open', false)" v-if="open" class="backdrop">
            <aside v-if="open" class="drawer">
                <nav>
                    <k-list :items="items">
                        <template #item="{ item }"> 
                            <a href="">{{item.title}}</a>
                        </template>
                    </k-list>
                </nav>
            </aside>
        </div>
    </transition>
</template>

<script lang="ts">
import { ISidebarLink } from '@/types'
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
 
@Component({

})
export default class NavigationDrawer extends Vue {
    @Model('update:open',{
        default: false,
        type: Boolean
    })
    open!: boolean

    items: ISidebarLink[] = [
        {
            title: 'Cliente',
            href: '/customer',
            icon: 's'
        }
    ]
}
</script>

<style lang="scss" scoped>
    .backdrop {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.4);

        &.fade-slide-enter-active,
        &.fade-slide-leave-active {
            .drawer {
                transform: translateX(0);
                transition: transform 300ms;
            }
        }

        &.fade-slide-enter,
        &.fade-slide-leave-to {
            opacity: 0;
            .drawer {
                transform: translateX(-100%);
            }
        }

        &.fade-slide-enter-active,
        &.fade-slide-leave-active {
            transition: opacity 300ms;
        }

        .drawer {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 300px;
            background-color: white;
        }
    }
</style>
