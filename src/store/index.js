import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const date = new Date();

export default new Vuex.Store({
    state: {
        fields: [
            {
                name: 'A',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'B',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'C',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'D',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'E',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'F',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'G',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'H',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'I',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
            {
                name: 'J',
                values: [
                    {
                        date,
                        value: 3
                    }
                ],
                disabled: false
            },
        ]
    },
    mutations: {
        updateValue(state, item) {
            const latestValue = item.values.slice(-1)[0].value;
            let newValue = Math.random() + 1;
            if (Math.random() < 0.5) newValue = -newValue;
            item.values.push({date: new Date(), value: Math.round((latestValue + newValue) * 100) / 100})
        },
        toggleStatus(state, item) {
            item.disabled = !item.disabled;
        }
    },
    actions: {},
    modules: {}
})
