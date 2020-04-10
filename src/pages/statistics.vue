<template>
    <v-row align="center" class="flex-column">
        <p>Statistics</p>
        <line-chart v-if="chart" :data="chart" class="mt-1" :colors="['#0c74bc ']" height="800px"></line-chart>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            chart: null
        }),
        computed: {
            fields() {
                return this.$store.state.fields;
            }
        },
        watch: {
            fields: {
                immediate: true,
                handler(fields) {
                    this.chart = [];
                    fields.forEach(field => {
                        let item = {name: field.name, data: {}, color: '#'+Math.floor(Math.random()*16777215).toString(16)};
                        field.values.forEach(value => item.data[value.date] = value.value);
                        this.chart.push(item)
                    })
                }
            }
        }
    }
</script>
