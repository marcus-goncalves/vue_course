Vue.component('click-counter', {
    template: '<button @click="count++">{{count}}</button>',
    data() {
        return {
            count: 0
        }
    }
})

Vue.component('click-counter2', {
    template: '#click-counter2-template',
    data() {
        return {
            count2: 0
        }
    }
})

Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict']
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
})

new Vue({
    el: '#app'
})