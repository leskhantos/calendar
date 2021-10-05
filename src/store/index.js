import { createStore } from 'vuex'

export default createStore({
     state :{
        months: [

            {
                name:"January",
                actions:['test','action']
            },
            {
                name:"February",
                actions:['test','action']
            },
            {
                name:"March",
                actions:['asd','action']
            },
            {
                name:"April",
                actions:['test','action']
            },
            {
                name:"May",
                actions:['qwerty']
            },
            {
                name:"June",
                actions:['test','action']
            },
            {
                name:"July",
                actions:['test','lll']
            },
            {
                name:"August",
                actions:['aaa','action']
            },
            {
                name:"September",
                actions:['asd','action']
            },
            {
                name:"October",
                actions:['qwerty','action','asd','asd']
            },
            {
                name:"November",
                actions:['qwerty','asd']
            },
            {
                name:"December",
                actions:['test','action','asd']
            },
        ],
         hidePrevUpdate: false
    },
    getters:{
        getMonths(state){
            return state.months
        },
        getMonthsActions: (state)=> (name) => {
            return state.months.find(months => months.name === name)
        }
    },
    mutations: {
        addAction (state,payload) {
            let item = (state.months.find(months => months.name === payload.name));
            item.actions.push(payload.action)
        },
        removeAction (state,payload) {
            let item = (state.months.find(months => months.name === payload.name));
            let index = item.actions.indexOf(payload.action);
            if (index !== -1) {
                item.actions.splice(index, 1);
            }
        },
       async updateAction (state,payload) {
            let item = (state.months.find(months => months.name === payload.name));
            let index = item.actions.indexOf(payload.action.value)
               item.actions.splice(index,1,payload.updatedText.value);
       }
    }

})
