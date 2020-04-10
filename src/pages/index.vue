<template>
    <div class="home">
        <v-row>
            <template v-for="field in fields">
                <v-col cols="12" md="6" lg="3">
                    <v-card tile class="mx-auto" max-width="344" outlined>
                        <v-card-text>
                            <v-row no-gutters justify="space-between" align="center" class="mb-3">
                                <span class="headline">{{ field.name }}</span>
                                <v-icon
                                        v-if="penultimateValue(field) !== latestValue(field)"
                                        :color="penultimateValue(field) > latestValue(field) ? 'error' : 'success'">
                                    {{
                                    penultimateValue(field) > latestValue(field) ?
                                    'mdi-trending-down' : 'mdi-trending-up'
                                    }}
                                </v-icon>
                            </v-row>
                            <p class="headline">{{ latestValue(field) }}</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                                    :text="!field.disabled"
                                    depressed
                                    tile
                                    @click="toggleDisabled(field)">
                                {{ field.disabled ? 'Enable' : 'Disable'}}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            interval: null
        }),
        created() {
            this.interval = setInterval(() => {
                if (this.fields) {
                    this.fields.forEach(field => !field.disabled && this.$store.commit('updateValue', field))
                }
            }, 2000)
        },
        methods: {
            latestValue(field) {
                return field.values.slice(-1)[0].value;
            },
            penultimateValue(field) {
                return field.values.slice(-2)[0].value;
            },
            toggleDisabled(field) {
                return this.$store.commit('toggleStatus', field);
            }
        },
        computed: {
            fields() {
                return this.$store.state.fields;
            }
        },
        beforeDestroy() {
            clearInterval(this.interval);
        }
    }
</script>
