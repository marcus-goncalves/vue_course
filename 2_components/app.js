
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

let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    },
    computed: {
        isSelected() {
            return this.name  === this.selectPlan
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
 

}

new Vue({
    el: '#app',
    components: {
        PlanPicker: PlanPickerComponent
    }
})