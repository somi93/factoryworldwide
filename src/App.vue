<template>
    <v-app>
        <v-app-bar app dark>
            <p class="mb-0">
                FACTORY <span class="primary--text">WORLD WIDE</span>
            </p>
            <v-spacer></v-spacer>
            <v-btn tile text exact :to="{name: 'index'}">Home</v-btn>
            <v-btn tile text :to="{name: 'statistics'}">Statistics</v-btn>
        </v-app-bar>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App'
    };
</script>
