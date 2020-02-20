<template>
    <v-navigation-drawer
            permanent
            app
            floating
            fixed
            expand-on-hover
            class="drawer classic-drawer"
            :clipped="$vuetify.breakpoint.mdAndUp"
            style="z-index: 9999;"
            :mobile-break-point="1264">
        <div class="drawer__top">
            <div class="drawer__logo">
                <v-img class="drawer__logo-container"
                       :src="require('@/assets/img/googlelogo_color_272x92dp.png')">
                </v-img>
            </div>
            <v-divider class="nav-divider"
                       color="#e6e6e6">
            </v-divider>
            <v-list dense>
                <template v-for="item in items">
                    <router-link :key="item.text" :to="item.link" active-class="drawer-item--active">
                        <v-list-item
                                v-ripple
                                class="drawer-item">
                            <v-list-item-action>
                                <v-icon class="drawer-item__icon" small>{{item.icon}}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </template>
            </v-list>
        </div>
        <div class="drawer__bottom">
            <amplify-sign-out v-ripple v-bind:signOutConfig="signOutConfig"></amplify-sign-out>
        </div>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer",
        data: () => ({
            signOutConfig: {
                signOutButton: 'Logout',
            },
            items: [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', link: '/dashboard'},
                {icon: 'mdi-account', text: 'Profile', link: '/profile'},
            ],
        })
    }
</script>

<style scoped>

</style>
