import {createWebHashHistory, createRouter} from 'vue-router'
import Calendar from "@/pages/Calendar";
import Detail from "@/pages/Detail";
export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'',
            name:'main',
            component: Calendar
        },{
            path:'/detail/:month',
            name: 'detail',
            component: Detail
        }
    ]
})