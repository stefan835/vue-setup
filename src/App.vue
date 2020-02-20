<template>
    <v-app>
        <Drawer></Drawer>
        <transition name="fade" mode="out-in">
            <v-container class="mt-6 mx-6" fluid>
                <v-content>
                    <Main></Main>
                </v-content>
            </v-container>
        </transition>
    </v-app>
</template>

<script>
    import Drawer from "./layout/Drawer";
    import Main from "./layout/Main";

    export default {
        name: 'App',
        components: {
            Drawer,
            Main
        }
    };
</script>
