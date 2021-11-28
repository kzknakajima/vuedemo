
new Vue({
    el:'#app',
    data: {
        url: 'https://www.mag2.com/m/0001323030',
        input_costs: '100',
        input_per: '30',
        input_years: '10',
        results: []
    },
    methods:{
        raise: function(){
            this.input_costs = this.input_costs * 2;
        }

    },
    computed:{
        calculate: function(){
            this.results = []
            let result = this.input_costs
            for (let i=0; i < this.input_years; i++){
                result = result * (1 + this.input_per * 0.01)
                this.results.push(Math.round(result))
            }
            return Math.round(result)
        }
    }
})